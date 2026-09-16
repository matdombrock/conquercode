import * as lib from '../../lib/lib.ts';
const n = lib.getInputN()[0];
let result = 1;
for (let i = 2; i <= n; i++) {
  result *= i;
}
lib.submit(result);
