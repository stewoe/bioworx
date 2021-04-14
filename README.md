bioworx
=======

Tools for the fight of humans against nature

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/bioworx.svg)](https://npmjs.org/package/bioworx)
[![Downloads/week](https://img.shields.io/npm/dw/bioworx.svg)](https://npmjs.org/package/bioworx)
[![License](https://img.shields.io/npm/l/bioworx.svg)](https://github.com/stewoe/bioworx/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g bioworx
$ bioworx COMMAND
running command...
$ bioworx (-v|--version|version)
bioworx/0.0.1 win32-x64 node-v12.18.4
$ bioworx --help [COMMAND]
USAGE
  $ bioworx COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bioworx hello [FILE]`](#bioworx-hello-file)
* [`bioworx help [COMMAND]`](#bioworx-help-command)
* [`bioworx string:count [STRING] [SUBSTRING]`](#bioworx-stringcount-string-substring)
* [`bioworx string:kmer [STRING] [CARDINALITY]`](#bioworx-stringkmer-string-cardinality)
* [`bioworx string:revcompl [SEQUENCE]`](#bioworx-stringrevcompl-sequence)
* [`bioworx string:startingpos [FILE]`](#bioworx-stringstartingpos-file)

## `bioworx hello [FILE]`

describe the command here

```
USAGE
  $ bioworx hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ bioworx hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/stewoe/bioworx/blob/v0.0.1/src/commands/hello.ts)_

## `bioworx help [COMMAND]`

display help for bioworx

```
USAGE
  $ bioworx help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `bioworx string:count [STRING] [SUBSTRING]`

Returns the number of appearances of <substring> in <string>

```
USAGE
  $ bioworx string:count [STRING] [SUBSTRING]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/string/count.ts](https://github.com/stewoe/bioworx/blob/v0.0.1/src/commands/string/count.ts)_

## `bioworx string:kmer [STRING] [CARDINALITY]`

Returns the most frequent k-mer of <string>

```
USAGE
  $ bioworx string:kmer [STRING] [CARDINALITY]

OPTIONS
  -h, --help    show CLI help
  -s, --simple
```

_See code: [src/commands/string/kmer.ts](https://github.com/stewoe/bioworx/blob/v0.0.1/src/commands/string/kmer.ts)_

## `bioworx string:revcompl [SEQUENCE]`

Returns reverse compliment of <sequence>

```
USAGE
  $ bioworx string:revcompl [SEQUENCE]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/string/revcompl.ts](https://github.com/stewoe/bioworx/blob/v0.0.1/src/commands/string/revcompl.ts)_

## `bioworx string:startingpos [FILE]`

describe the command here

```
USAGE
  $ bioworx string:startingpos [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/string/startingpos.ts](https://github.com/stewoe/bioworx/blob/v0.0.1/src/commands/string/startingpos.ts)_
<!-- commandsstop -->
