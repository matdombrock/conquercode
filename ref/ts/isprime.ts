import * as lib from '../../lib/lib.ts';
const n = lib.getInputN()[0];
if (n < 2) {
  lib.submit("false");
} else {
  let prime = true;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      prime = false;
      break;
    }
  }
  lib.submit(prime ? "true" : "false");
}
