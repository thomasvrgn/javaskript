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

  // eslint-disable-next-line class-methods-use-this
  private Any(tokens: Token[], index: number, ast: Node, token: Token): null {
    const fn: Function | undefined = this[token.value.toLocaleLowerCase()];
    if (!fn) return null;
    this[token.value.toLocaleLowerCase()](this.tokens, index + 1, ast, this.tokens[index + 1]);
    return null;
  }

  public parse(): string {
    this.Any(this.tokens, 0, this.ast, this.tokens[0]);
    return this.content;
  }
}
