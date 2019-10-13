"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const SudokuController_1 = require("Application/Controllers/SudokuController");
const Logger_1 = require("Application/Middleware/Logger");
const DefaultErrorHandler_1 = require("Application/Middleware/DefaultErrorHandler");
const cors = require("cors");
class Server {
    static start(args) {
        // Create base app and router/
        const app = express();
        const router = express.Router();
        const logger = new Logger_1.default();
        const errorHandler = new DefaultErrorHandler_1.default();
        // Append cors.
        app.use(cors());
        // Append logger.
        app.use(logger.execute.bind(logger));
        // Append controller routes.
        Server.ControllerRegistry.forEach(Controller => {
            const ctrl = new Controller();
            ctrl.register(router);
        });
        app.use('/', router);
        // Append fallback error handling.
        router.use(errorHandler.execute.bind(errorHandler));
        app.use(errorHandler.execute.bind(errorHandler));
        // Start.
        app.listen(args.port, () => {
            console.log(`Server started at http://localhost:${args.port}`);
        });
    }
}
Server.ControllerRegistry = [
    SudokuController_1.default
];
exports.default = Server;
//# sourceMappingURL=Server.js.map