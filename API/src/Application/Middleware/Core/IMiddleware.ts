import { NextFunction, Request, Response } from "express-serve-static-core";

export interface IMiddleware {
  execute(req: Request, res: Response, next: NextFunction): void;
}
