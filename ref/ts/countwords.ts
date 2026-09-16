import * as lib from '../../lib/lib.ts';
const input = lib.getInput().join(' ');
const words = input.trim().split(/\s+/).filter(w => w.length > 0);
lib.submit(words.length);
