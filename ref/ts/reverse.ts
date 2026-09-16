import * as lib from '../../lib/lib.ts';
const input = lib.getInput().join(' ');
lib.submit(input.split('').reverse().join(''));
