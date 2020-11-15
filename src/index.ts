/*//////////////////////////////////////
               Javaskript
                  Main
//////////////////////////////////////*/

import Parser from 'core/parser';
import * as FS from 'fs';

async function main() {
  const transpiled = new Parser(FS.readFileSync('./sample/index.sk', 'utf-8'));
  await transpiled.parse();
}

main();