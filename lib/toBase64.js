  const SUPPORTED_MIMES = require('./supported-mimes')

  const toBase64 = (extension, data) => {
    return `data:${SUPPORTED_MIMES[extension]};base64,${data.toString('base64')}`
  }

  module.exports = toBase64
