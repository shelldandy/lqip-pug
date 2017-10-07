const defaultConf = require('./config')
const sharp = require('./sharp')
const toBase64 = require('./toBase64')
const SUPPORTED_MIMES = require('./supported-mimes')

class BlurryPug {
  constructor (conf) {
    const config = Object.assign(defaultConf, conf)
    this.baseDir = config.baseDir
    this.size = config.size
    this.compiledPath = config.compiledPath
    this.template = config.template
  }

  checkInvalidExtension (extension) {
    return typeof SUPPORTED_MIMES[extension] === 'undefined'
  }

  blur (name) {
    const path = this.baseDir + '/' + name
    const extension = path.split('.').pop().toLowerCase()
    const isInvalid = this.checkInvalidExtension(extension)
    if (isInvalid) throw new Error('Unsupported image format')
    const buffer = sharp(path).resize(this.size).toBufferSync()
    const presrc = toBase64(extension, buffer)
    const src = `${this.compiledPath}/${name}`

    return this.template(presrc, src)
  }
}

module.exports = BlurryPug
