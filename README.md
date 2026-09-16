# CONQUERCODE

A local, offline, minimal, programming challenge system that supports arbitrary languages.

![Screenshot]('./_doc/screenshot.png')

## Setup 

### Requires:

- NodeJS
- NPM

### Via `./setup.sh`

```sh
./setup.sh
```

### Manual

```sh
# Install type deps
npm i
# Install tsx to run TS files directly
sudo npm i -g tsx
```

## Usage

### Init a challenge boilerplate

```sh
./cqc.ts <challenge> init <lang>
```

Example:

```sh
# Init boilerplate for fizzbuzz in ts
./cqc.ts fizzbuzz init ts

# Init boilerplate for add in python
./cqc.ts add init py
```

### Run a challenge

```sh
./cqc.ts <challenge> <solution_cmd>
```

Example:
```sh
# Solve fizzbuzz with TypeScript
./cqc.ts ch/fizzbuzz 'tsx sol/ts/fizzbuzz'

# Solve fizzbuzz with fish
./cqc.ts ch/fizzbuzz 'fish sol/fish/fizzbuzz.fish'
```

## Challenge Definitions

Challenges are defined in the `./challenge/` directory as markdown files. 

> [!NOTE]
> The markdown itself is treated as *structured data* and is parsed to extract the cases for the challenge. This is the *sole* source of challenge data. 

```md
# <TITLE>
<description>
<description>
...

# Cases
<case>
<case>
<case>
...
```

Example:
```
# Test 1
Add 2 numbers together and return the result

## Cases
1 1 ==> 2

1 2 ==> 3

1 3 ==> 4
```

## Boilerplate

In order for a challenge to be initialized for the given language it must have boilerplate in the `./boilerplate/<lang>/` directory.

## Reference Solutions

An incomplete set of reference solutions can be found in `./ref/<lang>/`.

## Contibuting

My hope is that people who find this idea cool will contibute new challenges and boilerplate to the project. If you want to add something, please feel free to make a PR!
