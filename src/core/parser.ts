/*//////////////////////////////////////
               Javaskript
                 Parser
//////////////////////////////////////*/

import { Types, Node } from 'typings/node';
import { Token } from 'typings/token';
import Tokens from 'tokens';
import Lexer from 'core/lexer';

export default class Parser {
  private readonly ast: Node = {
    type: Types.Program,
    children: [],
  };

  private readonly tokens: Token[] = [];

  constructor(
    private readonly content: string,
  ) {
    Lexer.addTokenSet(Tokens);
    this.tokens = Lexer.tokenize(this.content);
  }

  private Any(tokens: Token[], index: number, ast: Node, token: Token) {}

  public parse(): string {
    console.log(this.tokens);
    console.log(this.content, this.ast);
    return this.content;
  }
}
