import * as lib from '../../lib/lib.ts';
const input = lib.getInputN()[0];

let out: string[] = [];
for (let i = 1; i <= input; i++) {
  if (i % 15 === 0) out.push("FizzBuzz");
  else if (i % 5 === 0) out.push("Buzz");
  else if (i % 3 === 0) out.push("Fizz");
  else out.push(i.toString());
}
lib.submit(out.join(' '));
