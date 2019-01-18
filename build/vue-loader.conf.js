var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  preserveWhitespace: false,
  postcss: [
    require('autoprefixer')({
      browserslist: ['last 3 versions', 'Android', 'ChromeAndroid']
    })
  ],
  loaders: utils.cssLoaders({
      sourceMap: isProduction ?
          config.build.productionSourceMap :
          config.dev.cssSourceMap,
      extract: isProduction
  })
}
