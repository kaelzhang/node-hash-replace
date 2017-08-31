const digest = require('loader-utils/lib/getHashDigest')

const regex = name => new RegExp(
  `\\[(?:(\\w+):)?${name}(?::([a-z]+\\d*))?(?::(\\d+))?\\]`,
  'ig')
const STRING = 'string'

module.exports = name =>
  (string, replacer, buffer) => {
    const r = regex(name)

    return replacer
      ? typeof replacer !== STRING
        ? string.replace(r, replacer)
        : string.replace(r, (m, h, d, maxLength) =>
          maxLength = Number(maxLength)
            ? replacer.substr(0, maxLength)
            : replacer)
      : buffer
        ? string.replace(r, (m, hashType, digestType, maxLength) =>
          digest(buffer, hashType, digestType, maxLength))
        : string
  }
