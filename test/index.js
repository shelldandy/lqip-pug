const BlurryPug = require('../index')
const { join } = require('path')
const expectation = `<img src="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwQG/8QAIxAAAgECBgIDAAAAAAAAAAAAAQMCBREABAYHEkEhcTEyYf/EABUBAQEAAAAAAAAAAAAAAAAAAAQF/8QAHREAAQQCAwAAAAAAAAAAAAAAAQADBBECBRIhsf/aAAwDAQACEQMRAD8AfcbVdOrdDqun4LcMxMcDKwKyYzBIuDcX4kXxrdq8i6j7f0XKOVJDFptOB+ORJJ/D5JxdHLIU2bVIVBrPvOMAJS9nvDwbNRJXIxPdu/eAYyyOiLV2TpW3BbR4+L//2Q==" data-src="assets/images/tenis.jpg" class="lazyload" />`

const blurry = new BlurryPug({
  baseDir: join(__dirname),
  compiledPath: 'assets/images'
})

const IMG = blurry.blur('tenis.jpg')

const test = IMG === expectation

console.log('Our image matches our expectations...', test)
