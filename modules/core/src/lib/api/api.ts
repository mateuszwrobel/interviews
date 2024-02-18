import { flow } from '../utils';

import type {
  ApiError,
  ApiOptions,
  GetContent,
  Options,
  Signal,
} from './types';

export const API_ERROR_TYPE = {
  API: 'API',
  API_TIMEOUT: 'API_TIMEOUT',
  API_ABORTED: 'API_ABORTED',
} as const;

const addHeaders = <T>(options: Options<T>): Options<T> => {
  const headers: HeadersInit = options.headers || {};
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  if (!headers['Content-Type']) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    headers['Content-Type'] = 'application/json';
  }

  return {
    ...options,
    headers,
  };
};

function prepareResponseHandler<T>(
  params: ApiOptions<T>,
  getContent: GetContent<T>
) {
  return function responseHandler<T>(
    promise: Promise<Response>
  ): Promise<T & { responseStatus: number }> {
    return promise.then(async (r) => {
      try {
        return await getContent(r);
      } catch (e) {
        const { url, options } = params;
        throw {
          exception: e,
          status: r.status,
          url,
          options,
          type: API_ERROR_TYPE.API,
        } as ApiError<T>;
      }
    }) as Promise<T & { responseStatus: number }>;
  };
}

const getJSONContent = async <T>(r: Response): Promise<T> => {
  if (r.status === 204) {
    return Promise.resolve({} as T);
  }

  const data: T = await r.json();
  return Promise.resolve({
    ...data,
    responseStatus: r.status,
  });
};

function prepareAbortHandler<T>(signal: Signal) {
  return function abortHandler<T>(promise: Promise<T>) {
    return promise.catch((error: DOMException) => {
      if (error.name === 'AbortError') {
        const passedError = signal.reason as ApiError<T>;
        if (passedError.type === API_ERROR_TYPE.API_TIMEOUT) {
          throw passedError;
        }
        throw {
          exception: new Error('Request Aborted'),
          type: API_ERROR_TYPE.API_ABORTED,
        };
      }
      throw error;
    });
  };
}

export const fetchWithAbort = <T>(apiOptions: ApiOptions<T>) => {
  const abortController = new AbortController();
  const enrichedOptions = {
    ...addHeaders(apiOptions.options),
    signal: abortController.signal,
  };

  const handleResponse = prepareResponseHandler<T>(
    apiOptions,
    apiOptions.options?.getContent || getJSONContent
  );

  const handleAbort = prepareAbortHandler(abortController.signal);

  const promise = flow<
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    [RequestInfo | URL, RequestInit],
    Promise<Response>,
    Promise<T>,
    Promise<T>
  >(
    fetch,
    handleResponse,
    handleAbort
  )(apiOptions.url, enrichedOptions);

  return {
    promise,
    abort: abortController.abort,
  };
};
