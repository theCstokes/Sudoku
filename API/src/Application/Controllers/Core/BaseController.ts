import * as express from 'express';
import DefaultErrorHandler from "Application/Middleware/DefaultErrorHandler";

export default class BaseController {
  protected urlRoute: string;
  protected router: express.Router;

  public constructor(urlRoute: string) {
    this.urlRoute = urlRoute;
    this.router = express.Router({ mergeParams: true });
  }

  public register(parent: express.Router) {
    // Add Controller level error handling.
    const errorHandler = new DefaultErrorHandler();
    this.router.use(errorHandler.execute.bind(errorHandler));

    // Append to parent router.
    parent.use(this.urlRoute, this.router);
  }
}
