let projectRoot = process.cwd();
let path = require('path');
let webpack = require('webpack');
let merge =require('webpack-merge');
let cleanWebpackPlugin = require('clean-webpack-plugin');
let webpackConfig = require('./webpack.base.config.js');
let OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
let config = require('../config');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let preConfig = merge(webpackConfig, {
    devtool: '#source-map',
    output: {
        ...webpackConfig.output,
        ...{
            path: config.pre.assetsRoot,
            publicPath: config.pre.assetsPublicPath,
            filename: 'js/[name]_[chunkhash:8].js',
            chunkFilename: 'js/[name]_[chunkhash:8].js'
        }
    },
    plugins: webpackConfig.plugins.concat([
        new cleanWebpackPlugin(['pre'],{
            root: path.resolve(projectRoot),
            verbose: true,
            dry: false
        }),
        new webpack.DefinePlugin({
            ENV: JSON.stringify('pre'),
            'process.env.NODE_ENV': JSON.stringify('pre')
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
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


        //这个插件压缩所有最终束的JavaScript代码
        new webpack.optimize.UglifyJsPlugin({
            mangle: true, //?丑化压缩
            compress: {
                //http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
                warnings: false //抑制丑化警告
            }
        })
    ])
});

module.exports = preConfig;
