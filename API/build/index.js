"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// NOTE: app-module-path must be the very first import of the application.
// These 2 lines allows modules to be required by absolute path (no ../ in imports).
// Do Not Remove.
const appModulePath = require("app-module-path");
appModulePath.addPath(__dirname);
const App_1 = require("Application/App");
const app = new App_1.default();
app.run();
//# sourceMappingURL=index.js.map