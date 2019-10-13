"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DefaultErrorHandler {
    execute(error, req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).json({ error: error.message });
    }
}
exports.default = DefaultErrorHandler;
//# sourceMappingURL=DefaultErrorHandler.js.map