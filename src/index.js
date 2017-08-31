const digest = require('loader-utils/lib/getHashDigest')

const regex = name => new RegExp(
  `\\[(?:(\\w+):)?${name}(?::([a-z]+\\d*))?(?::(\\d+))?\\]`,
  'ig')

module.exports = name =>
  (string, replacer) => {
    const r = regex(name)

    if (typeof replacer !== 'string') {
      return string.replace(r, replacer)
    }

    return string.replace(r, (m, hashType, digestType, maxLength) =>
      hashType || digestType
        ? digest(replacer, hashType, digestType, maxLength)
        : maxLength
          ? replacer.substr(0, maxLength)
          : replacer
    )
  }
