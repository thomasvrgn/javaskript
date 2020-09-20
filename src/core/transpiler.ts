/*//////////////////////////////////////
               Javaskript
               Transpiler
//////////////////////////////////////*/

import Parser from 'core/parser';
import { Token } from 'typings/token';
import Tokens from 'tokens';
import * as Path from 'path';
import File from 'utils/file';
import * as Moment from 'moment';
import * as Chalk from 'chalk';

export default class Transpiler {
  private code: string = '';

  private folder: string;

  private tokens: Array<Array<Token>> = [];

  private states: Array<string> = [];

  constructor(code: string, folder: string) {
    const lines: Array<string> = code.split(/\r?\n/g);
    this.folder = folder;
    Parser.addTokenSet(Tokens);
    lines.map((line: string) => {
      const tokens: Array<Token> = Parser.tokenize(line);
      this.tokens.push(tokens);
      return true;
    });
  }

  public transpile(): string {
    this.tokens.map((line: Array<Token>): Boolean => {
      line.map((item: Token): Boolean => {
        const {
          token,
          value,
        } = item;
        switch (token) {
          case 'PRINT': {
            this.states.push('PRINT');
            break;
          }
          case 'STRING': {
            const path: string = Path.resolve(process.cwd(), this.folder, `${value.slice(1, value.length - 1)}.sk`);
            const reader = new File(path);
            const code: string = (reader.readSync() as string).toString();
            const error: string | null = code.match(/ENOENT:.*?,/g)
              ? code.match(/ENOENT:.*?,/g)[0]
              : '';
            if (error) {
              if (error.includes('no such file or directory')) {
                console.log(`[${Chalk.grey(Moment().format('HH:mm:ss'))}] File ${value} not found.`);
              }
            } else this.code += code;
            break;
          }
          case 'IMPORT': {
            this.states.push('IMPORT');
            break;
          }
          default: {
            break;
          }
        }
        return true;
      });
      return true;
    });
    return this.code;
  }
}