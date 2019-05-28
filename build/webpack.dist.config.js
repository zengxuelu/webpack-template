/**
 * @Author: Liao Hui
 * @Date:   2018-10-29T15:40:30+08:00
 * @Last modified by:   Liao Hui
 * @Last modified time: 2018-11-01T11:21:34+08:00
 */

let projectRoot = process.cwd();
let path = require('path');
let webpack = require('webpack');
let cleanWebpackPlugin = require('clean-webpack-plugin');
let webpackConfig = require('./webpack.base.config.js');
let OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
let config = require('../config');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = Object.assign({}, webpackConfig, {
  devtool: 'source-map',
  output: {
    ...webpackConfig.output,
    ...{
        path: config.build.assetsRoot,
        publicPath: config.build.assetsPublicPath,
        filename: 'js/[name]_[chunkhash:8].js',
        chunkFilename: 'js/[name]_[chunkhash:8].js'
    }
  },
  plugins: webpackConfig.plugins.concat([
    new cleanWebpackPlugin(['dist'], {
      root: path.resolve(projectRoot),
      verbose: true,
      dry: false
    }),
    new OptimizeCSSPlugin({
        cssProcessorOptions: {
            safe: true
        }
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('production'),
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // split vendor js into its own file 单独打包有利于缓存
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    // 为异步加载的代码打一个公共的包
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),

    new HtmlWebpackPlugin({
        inject: 'body',
        template: './src/index.html',
        filename: 'index.html',
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
    }),

    new CopyPlugin([{
        from: path.resolve(__dirname, '../static'),
        to: path.resolve(config.build.assetsRoot, 'static')
    }]),

    //这个插件压缩所有最终束的JavaScript代码
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,    //?丑化压缩
      compress: {
        //http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
        warnings: false    //抑制丑化警告
      }
    })

  ])
});
