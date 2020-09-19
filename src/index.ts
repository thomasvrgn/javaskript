/*//////////////////////////////////////
               Javaskript
                  Main
//////////////////////////////////////*/

import Transpiler from 'core/transpiler';

const transpiled = new Transpiler('print "Hello world"');

console.log(transpiled.transpile());