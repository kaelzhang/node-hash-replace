const test = require('ava')
const loaderUtils = require('loader-utils')
const replace = require('..')
const crypto = require('crypto')

const md5 = string => {
  const x = crypto.createHash('md5')
  x.update(string)
  return x.digest('hex')
}

;[
[
  // string
  'file.[hash].js',
  // name
  'chunkhash',
  // replacer
  'abc',
  'file.[hash].js',
  // buffer
],
[
  'file.[hash].js',
  'hash',
  'abc',
  'file.abc.js'
],
[
  'file.[hash:7].js',
  'hash',
  'abcdefghijk',
  'file.abcdefg.js'
],
[
  'file.[hash:7].js',
  'hash',
  () => 'abc',
  'file.abc.js'
],
[
  'file.[md5:hash:hex].js',
  'hash',
  null,
  `file.${md5('1234567')}.js`,
  '1234567'
],
[
  'file.[md5:hash:hex:7].js',
  'hash',
  null,
  `file.${md5('1234567').substr(0, 7)}.js`,
  '1234567'
],
[
  'file.[hash].js',
  'hash',
  null,
  'file.[hash].js'
]

].forEach(([string, name, replacer, e, buffer]) => {

  test(`${string} | ${name}`, async t => {
    t.is(replace(name)(string, replacer, buffer), e)
  })
})
