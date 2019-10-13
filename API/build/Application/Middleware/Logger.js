"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    execute(req, res, next) {
        console.log(`[${Date.now()}] Request: ${req.ip} ${req.url} ${req.method}`);
        next();
        console.log(`[${Date.now()}] Response: ${res.statusCode}`);
    }
}
exports.default = Logger;
//# sourceMappingURL=Logger.js.map