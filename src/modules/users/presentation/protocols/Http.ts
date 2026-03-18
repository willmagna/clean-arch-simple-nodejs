export interface HttpRequest<TBody = any, TParams = any, TQuery = any> {
  body?: TBody;
  params?: TParams;
  query?: TQuery;
  headers?: Record<string, string>;
}

export interface HttpResponse<T = any> {
  statusCode: number;
  body: T;
}
