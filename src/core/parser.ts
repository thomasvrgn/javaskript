/* eslint-disable no-param-reassign */
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

  protected print(tokens: Token[], index: number, ast: Node, token: Token) {
    ast.type = Types.FunctionCall;
    ast.raw = token.value;
    ast.children = [
      {
        type: Types.Unknown,
        parent: ast,
      },
    ];
    return this.Any(this.tokens, index + 1, ast.children.slice(-1)[0], this.tokens[index + 1]);
  }

  protected string(tokens: Token[], index: number, ast: Node, token: Token) {
    ast.type = Types.String;
    ast.raw = token.value;
    return this.Any(this.tokens, index + 1, ast, this.tokens[index + 1]);
  }

  protected space(tokens: Token[], index: number, ast: Node, token: Token) {
    return this.Any(this.tokens, index + 1, ast, this.tokens[index + 1]);
  }

  // eslint-disable-next-line class-methods-use-this
  protected Any(tokens: Token[], index: number, ast: Node, token: Token): null {
    if (!token || !token.token) return null;
    if (!this[token.token.toLocaleLowerCase()]) return null;
    this[token.token.toLocaleLowerCase()](this.tokens, index, ast, this.tokens[index]);
    return null;
  }

  public parse(): Node {
    this.ast.children.push({
      type: Types.Unknown,
      parent: this.ast,
    });
    this.Any(this.tokens, 0, this.ast.children.slice(-1)[0], this.tokens[0]);
    return this.ast;
  }
}
