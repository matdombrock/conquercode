import * as lib from '../../lib/lib.ts';
const s = lib.getInput()[0];
const values: Record<string, number> = {
  I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
};
let total = 0;
for (let i = 0; i < s.length; i++) {
  const cur = values[s[i]]!;
  const next = values[s[i + 1]] || 0;
  if (cur < next) total -= cur;
  else total += cur;
}
lib.submit(total);