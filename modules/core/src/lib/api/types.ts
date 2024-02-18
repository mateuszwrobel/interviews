export type Abort = AbortController['abort'];
export type Signal = AbortController['signal'];
export type GetContent<T> = (r: Response) => Promise<T | Blob>;
export type Options<T> = {
  getContent?: GetContent<T>;
  signal?: Signal;
} & RequestInit;

export type ApiError<T> = {
  exception: Error;
  url: string;
  options: Options<T>;
  type: 'API' | 'API_TIMEOUT' | 'API_CANCELLED';
  body?: any;
  status?: number;
};

export interface ApiOptions<T> {
  url: string;
  options: Options<T>;
}
