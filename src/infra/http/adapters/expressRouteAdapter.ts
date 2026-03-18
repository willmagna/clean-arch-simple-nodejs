import { Request, Response, NextFunction } from "express";
import { Controller } from "../../../modules/users/presentation/protocols/Controller.js";

export function adaptExpressRoute(controller: Controller) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const httpResponse = await controller.handle({
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers as Record<string, string>,
      });

      return res.status(httpResponse.statusCode).json(httpResponse.body);
    } catch (error) {
      next(error);
    }
  };
}
