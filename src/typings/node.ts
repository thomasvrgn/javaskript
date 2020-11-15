export enum Types {
  Program = 'Program',
  FunctionCall = 'FunctionCall',
  String = 'String',
  Unknown = 'Unknown',
}

export interface Node {
  type: Types,
  raw?: string,
  children?: Node[],
  parent?: Node,
}