"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const Server_1 = require("Application/Server");
class App {
    run() {
        yargs
            .command('start', 'Starts the web server.', (yarg) => {
            return yarg
                .option('port', {
                type: 'number',
                description: 'The port to use.',
                required: false,
                default: 8080
            });
        }, Server_1.default.start)
            .demandCommand()
            .help()
            .parse();
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map