import * as yargs from 'yargs';
import { Argv } from 'yargs';

import Server from 'Application/Server';

export default class App {
  public run() {
    yargs
      .command(
        'start',
        'Starts the web server.',
        (yarg: Argv) => {
          return yarg
            .option('port', {
              type: 'number',
              description: 'The port to use.',
              required: false,
              default: 8080
            })
        },
        Server.start
      )
      .demandCommand()
      .help()
      .parse();
  }
}
