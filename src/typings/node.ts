export enum Types {
  Program = 'Program',
  FunctionCall = 'FunctionCall',
  String = 'String',
}

export interface Node {
  type: Types,
  raw?: string,
  children?: Node[],
  parent?: Node,
}