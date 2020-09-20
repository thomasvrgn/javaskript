/*//////////////////////////////////////
               Javaskript
                  File
//////////////////////////////////////*/

import { readFile, readFileSync } from 'fs';

export default class File {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  public read(): Promise<string> {
    return new Promise((resolve: Function, reject: Function) => {
      readFile(this.fileName, 'utf-8', (error: NodeJS.ErrnoException, data: string) => {
        if (error) reject(error);
        resolve(data);
      });
    });
  }

  public readSync(): string | unknown {
    try {
      return readFileSync(this.fileName, 'utf-8');
    } catch (exception) {
      return exception;
    }
  }
}
