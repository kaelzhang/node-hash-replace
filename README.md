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

replace('hash')('file.[hash:7].[chunkhash]', 'aGFzaC1yZXBsYWNl')
// -> 'file.aGFzaC1.[chunkhash]'
// only replace [hash], but not [chunkhash]
```

## replace(hashName)(string, replacer)

- **hashName** `String` has following structure:

```js
'[hash]'
'[hashName:length]'
'[hashType:hashName:digestType]'
'[hashType:hashName:digestType:length]'
```

- **replacer** `String|function(buffer, hashType, digestType, length)`

```js
const filename = replace('contenthash')('file.[contenthash:7].js', fileContent)
```

## License

MIT
