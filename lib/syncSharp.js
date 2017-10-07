const Sharp = require('sharp')
const deasync = require('deasync')

Sharp.prototype.toBufferSync = function () {
  let done = false
  let data
  this.toBuffer((err, _data_) => {
    if (err) throw err
    data = _data_
    done = true
  })
  deasync.loopWhile(() => {
    return !done
  })
  return data
}

module.exports = Sharp
