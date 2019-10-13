import { IErrorMiddleware } from "Application/Middleware/Core/IErrorMiddleware";
import { NextFunction, Request, Response } from "express-serve-static-core";

export default class DefaultErrorHandler implements IErrorMiddleware {
  execute(error: Error, req: Request, res: Response, next: NextFunction): void {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).json({ error: error.message });
  }
}
