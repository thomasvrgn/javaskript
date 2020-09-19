/*//////////////////////////////////////
               Javaskript
               Transpiler
//////////////////////////////////////*/

import Parser from 'core/parser';
import { Token } from 'typings/token';
import Tokens from 'tokens';

export default class Transpiler {
  private code: string = '';

  private tokens: Array<Array<Token>> = [];

  constructor(code: string) {
    const lines: Array<string> = code.split(/\r?\n/g);
    Parser.addTokenSet(Tokens);
    lines.map((line: string) => {
      const tokens: Array<Token> = Parser.tokenize(line);
      this.tokens.push(tokens);
      return true;
    });
  }

  public transpile(): string {
    this.tokens.map((line: Array<Token>) => {
      line.map((item: Token) => {
        const {
          token,
          value,
          length,
        } = item;
        console.log(token, value, length);
        return true;
      });
      return true;
    });
    return this.code;
  }
}