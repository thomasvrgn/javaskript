/*//////////////////////////////////////
               Javaskript
                 Parser
//////////////////////////////////////*/

import { Types, Node } from 'typings/node';

export default class Parser {
  private readonly ast: Node = {
    type: Types.Program,
    children: [],
  };

  constructor(
    private readonly content: string,
  ) {}

  public parse(): string {
    console.log(this.content, this.ast);
    return this.content;
  }
}
