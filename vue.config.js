const path = require('path');
const WebpackMildCompile = require('webpack-mild-compile').Plugin;
const publicPathMap = {
  pre: '/adminTest/',
  production: '/survey/admin/',
  development: '/'
};

module.exports = {
  publicPath: publicPathMap[process.env.VUE_APP_ENV],
  outputDir: process.env.VUE_APP_ENV == 'pre' ? 'pre' : 'dist',
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.join(__dirname, 'src')
      }
    },
    plugins: [
      new WebpackMildCompile()
    ]
  },
  chainWebpack: config => {
    config
      .output
      .filename('js/[name].[hash:3].js')
      .end();
    config
      .plugin('html')
      .tap(args => {
        args[0].template = './src/index.html'
        return args
      })
  },
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://192.168.140.56:3000/',
        changeOrigin: 'true'
      }
    }
  }
}
