import * as Moment from 'moment';
import * as Chalk from 'chalk';

export default class Error {
  private message: string;

  constructor(content: string) {
    this.message = content;
  }

  public log(): void {
    process.stdout.write(`[${Chalk.grey(Moment().format('HH:mm:ss'))}] ${this.message}\n`);
  }
}