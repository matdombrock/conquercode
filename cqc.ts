#! /bin/env tsx
import fs from 'node:fs';
import util from 'node:util';
import child_process from 'node:child_process';
const exec = util.promisify(child_process.exec);

const log = {
  misc: (s: string) => console.log('\x1b[36m' + s + '\x1b[0m'),
  dbg: (s: string) => console.log('\x1b[33m' + s + '\x1b[0m'),
  pass: (s: string) => console.log('\x1b[32m' + s + '\x1b[0m'),
  fail: (s: string) => console.log('\x1b[31m' + s + '\x1b[0m'),
  input: (s: string) => console.log('\x1b[34m' + s + '\x1b[0m'),
  output: (s: string) => console.log('\x1b[36m' + s + '\x1b[0m'),
}

type ChallengeData = {
  name: string,
  description: string,
  cases: Array<[string, string]>;
}

const challenge = process.argv[2];
const runcmd = process.argv[3];
if (!challenge) throw 'Error: missing challenge';
if (['help', '--help', '-h'].includes(challenge)) {
  console.log('help');
  process.exit(0);
}
if (!runcmd) throw 'Error: missing run cmd';

if (runcmd === 'init') {
  const lang = process.argv[4];
  if (!lang) throw 'Error: no lange provided';
  if (!['ts', 'fish'].includes(lang)) throw 'Error: lang not yet supported'
  if (!fs.existsSync('./sol')) fs.mkdirSync('./sol');
  const markdownTarget = `./challenge/${challenge}.md`;
  if (!fs.existsSync(markdownTarget)) throw 'Error: no challenge found';
  const codeTarget = `./boilerplate/${lang}/${challenge}.${lang}`;
  if (!fs.existsSync(codeTarget)) throw 'Error: no boilerplate found';
  let code = fs.readFileSync(codeTarget, 'utf-8');
  let markdown = fs.readFileSync(markdownTarget, 'utf-8');
  switch (lang) {
    case 'ts':
      markdown = '/*\n' + markdown + '\n*/';
      break;
    case 'fish':
      markdown = markdown.split('\n').map((l) => '# ' + l).join('\n');
      break;
  }
  code = markdown + `\n\n` + code;
  fs.writeFileSync(`./sol/${lang}/${challenge}.${lang}`, code);
  console.log(`Created ./sol/${lang}/${challenge}.${lang}`);
  process.exit(0);
}

function getCData(challenge: string) {
  const raw = fs.readFileSync(`./challenge/${challenge}.md`, 'utf-8');
  const lines = raw.split('\n');
  const cdata: ChallengeData = {
    name: lines[0]!.replace('# ', ''),
    description: 'placeholder',
    cases: [],
  };
  const casesIndex = lines.findIndex((v) => v == "## Cases");
  cdata.description = lines.slice(1, casesIndex).join('\n');
  const cdataCasesLines = lines.slice(casesIndex + 1);
  for (let line of cdataCasesLines) {
    if (!line.includes('==>')) continue;
    const split = line.split('==>');
    if (split.length !== 2) throw `Bad case: ${line}`;
    const input = split[0]!.trim();
    const output = split[1]!.trim();
    cdata.cases.push([input, output]);
  }
  return cdata;
}

const cdata = getCData(challenge!);
const cases = cdata.cases;

log.misc(cdata.name);
log.misc(cdata.description.trim());
for (const [i, test] of Object.entries(cases)) {
  const fullcmd = `${runcmd} ${test[0]}`;
  let { stdout, stderr } = await exec(fullcmd);
  log.misc('---');
  stdout = stdout.trim();
  log.misc(`#${i}`);
  log.input(`I==> ${test[0]}`);
  log.output(`E==> ${test[1]}`);
  log.output(`G==> ${stdout}`);
  if (stdout == test[1]) log.pass('PASS');
  else log.fail('FAIL');
  if (stderr) {
    log.dbg('///DBG///');
    log.dbg(stderr.trim());
  }
}
