const { cwd } = require('process')

const config = {
  baseDir: cwd(),
  size: 16,
  compiledPath: cwd(),
  template: (presrc, src) => `<img src="${presrc}" data-src="${src}" class="lazyload" />`
}

module.exports = config
