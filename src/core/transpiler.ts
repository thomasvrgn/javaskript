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
    console.log(this.tokens);
    return this.code;
  }
}