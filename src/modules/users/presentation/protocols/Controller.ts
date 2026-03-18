import { HttpRequest, HttpResponse } from "./Http.js";

export interface Controller {
  handle(request: HttpRequest): Promise<HttpResponse>;
}
