export const getInput = (): string[] => process.argv.slice(2);
export const getInputN = (): number[] => process.argv.slice(2).map((v) => Number(v));
export const submit = console.log;
export const dbg = console.error;
