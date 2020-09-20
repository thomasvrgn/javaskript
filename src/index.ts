/*//////////////////////////////////////
               Javaskript
                  Main
//////////////////////////////////////*/

import Transpiler from 'core/transpiler';
import * as FS from 'fs';

async function main() {
  const transpiled = new Transpiler(FS.readFileSync('./bin/skript.sk', 'utf-8'), './bin');
  const code: string = await transpiled.transpile();
  console.log(code);
}

main();