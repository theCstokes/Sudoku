"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const DefaultErrorHandler_1 = require("Application/Middleware/DefaultErrorHandler");
class BaseController {
    constructor(urlRoute) {
        this.urlRoute = urlRoute;
        this.router = express.Router({ mergeParams: true });
    }
    register(parent) {
        // Add Controller level error handling.
        const errorHandler = new DefaultErrorHandler_1.default();
        this.router.use(errorHandler.execute.bind(errorHandler));
        // Append to parent router.
        parent.use(this.urlRoute, this.router);
    }
}
exports.default = BaseController;
//# sourceMappingURL=BaseController.js.map