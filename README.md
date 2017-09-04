[![Build Status](https://travis-ci.org/kaelzhang/node-hash-replace.svg?branch=master)](https://travis-ci.org/kaelzhang/node-hash-replace)
[![Coverage](https://codecov.io/gh/kaelzhang/node-hash-replace/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/node-hash-replace)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/node-hash-replace?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/node-hash-replace)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/hash-replace.svg)](http://badge.fury.io/js/hash-replace)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/hash-replace.svg)](https://www.npmjs.org/package/hash-replace)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/node-hash-replace.svg)](https://david-dm.org/kaelzhang/node-hash-replace)
-->

# hash-replace

Substitute a webpack-style hash template string.

## Install

```sh
$ npm install hash-replace --save
```

## Usage

```js
import replace from 'hash-replace'
const r = replace('hash')

// example-1
// only replace [hash], but not [chunkhash]
r('file.[hash:7].[chunkhash]', 'aGFzaC1yZXBsYWNl')
// -> 'file.aGFzaC1.[chunkhash]'

// example-2
// If the second argument is null, then it will generate hash from the
// value of the third argument
r('file.[hash:7].js', null, '1234567')
// -> 'file.fcea920.js'
```

## replace(hashName)(template, replacer, content)

- **hashName** `String`
- **template** `String`
  - **hashType** `String=md5` defaults to `'md5'`
  - **hashName** `String` if the value of `template.hashName` and `hashName` not matches, the template will not be substituted.
  - **digestType** `String=hex` defaults to `'hex'`
  - **maxLength** `Number=Number.POSITIVE_INFINITY` maximum length of the hash. If unset, there will no limit.

The `template` has the following structure:

```js
'[hash]'
'[hashName:maxLength]'
'[hashType:hashName:digestType]'
'[hashType:hashName:digestType:maxLength]'
```

And example-2 is equivalent to:

```js
r('file.[md5:hash:hex:7].js', null, '1234567')
```

- **replacer** `String=|function(match, hashType, digestType, length)=`

```js
const r = replace('contenthash')
const filename =
  r('file.[contenthash:7].js', null, fileContent)
```

- **content** `String=|Buffer=` If `replacer` is unset, it will try to digest the `content` to get the crypted hash.

## License

MIT
