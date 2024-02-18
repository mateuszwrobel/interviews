import { API_ERROR_TYPE, fetchWithAbort } from './api';

const validResponse = { json: () => Promise.resolve({}) };

type fetchFn = (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => Promise<Response>;

describe('fetchWithAbort', () => {
  let originalFetch: fetchFn;

  beforeEach(() => {
    originalFetch = globalThis.fetch;
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  it('should add headers to the request', async () => {
    const apiOptions = {
      url: '/test',
      options: {},
    };

    globalThis.fetch = vi
      .fn()
      .mockImplementation(() => Promise.resolve(validResponse));

    await fetchWithAbort(apiOptions);

    expect(globalThis.fetch).toHaveBeenCalledWith(
      '/test',
      expect.objectContaining({
        headers: expect.objectContaining({
          'Content-Type': 'application/json',
        }),
      })
    );
  });

  it('should handle response that cannot be parsed', async () => {
    const apiOptions = {
      url: '/test',
      options: {},
    };

    globalThis.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.reject(new Error('Failed to parse response')),
        status: 200,
      })
    );

    const { promise } = fetchWithAbort(apiOptions);

    await expect(promise).rejects.toEqual({
      exception: new Error('Failed to parse response'),
      status: 200,
      url: apiOptions.url,
      options: apiOptions.options,
      type: 'API',
    });
  });

  it('should cancel the request when the abort method is called', async () => {
    const apiOptions = {
      url: '/test',
      options: {},
    };

    const abortError = {
      exception: new Error('Request Aborted'),
      type: API_ERROR_TYPE.API_ABORTED,
    };

    const abortController = {
      signal: {
        addEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
        removeEventListener: vi.fn(),
        onabort: null,
        aborted: false,
        reason: '',
        throwIfAborted: vi.fn(),
      },
      abort: vi.fn(),
    };
    vi.spyOn(global, 'AbortController').mockImplementation(() => {
      return abortController;
    });

    globalThis.fetch = vi
      .fn()
      .mockImplementation(() => Promise.reject(abortError));

    const { promise, abort } = fetchWithAbort(apiOptions);
    abort();

    try {
      await promise;
    } catch (error) {
      expect(error).toEqual(expect.objectContaining(abortError));
    }
  });
});
