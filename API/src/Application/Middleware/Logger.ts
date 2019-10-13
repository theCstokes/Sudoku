import { IMiddleware } from "Application/Middleware/Core/IMiddleware";
import { NextFunction, Request, Response } from "express-serve-static-core";

export default class Logger implements IMiddleware {
  execute(req: Request, res: Response, next: NextFunction): void {
    console.log(`[${Date.now()}] Request: ${req.ip} ${req.url} ${req.method}`);
    next();
    console.log(`[${Date.now()}] Response: ${res.statusCode}`);
  }
  
}
