import * as express from 'express';
import SudokuController from "Application/Controllers/SudokuController";
import Logger from "Application/Middleware/Logger";
import DefaultErrorHandler from "Application/Middleware/DefaultErrorHandler";
import BaseController from "Application/Controllers/Core/BaseController";
import * as cors from "cors";

export interface IServerCommandHandlerArgs {
  port: number;
}

export default class Server {
  private static readonly ControllerRegistry: { new(): BaseController }[] = [
    SudokuController
  ];

  public static start(args: IServerCommandHandlerArgs) {
    // Create base app and router/
    const app = express();
    const router = express.Router();

    const logger = new Logger();
    const errorHandler = new DefaultErrorHandler();

    // Append cors.
    app.use(cors());

    // Append logger.
    app.use(logger.execute.bind(logger));

    // Append controller routes.
    Server.ControllerRegistry.forEach(Controller =>  {
      const ctrl = new Controller();
      ctrl.register(router);
    });
    app.use('/', router);

    // Append fallback error handling.
    router.use(errorHandler.execute.bind(errorHandler));
    app.use(errorHandler.execute.bind(errorHandler));

    // Start.
    app.listen(args.port, () => {
      console.log(`Server started at http://localhost:${ args.port }`);
    });
  }
}
