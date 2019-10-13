import { NextFunction, Request, Response } from "express-serve-static-core";

export interface IErrorMiddleware {
  execute(error: Error, req: Request, res: Response, next: NextFunction): void;
}
