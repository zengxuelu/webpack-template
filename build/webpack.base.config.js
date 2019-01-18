/**
 * @Author: Liao Hui
 * @Date:   2018-10-29T15:40:30+08:00
 * @Last modified by:   Liao Hui
 * @Last modified time: 2018-11-01T11:02:03+08:00
 */

let path = require('path');
let projectRoot = process.cwd();

let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let vueConfig = require('./vue-loader.conf');
let utils = require('./utils');
let config = require('../config');

module.exports = {
    entry: {
        app: './src/app.js'
    },

    output: {
        path: path.resolve(projectRoot, './dist/'),
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath :
            config.dev.assetsPublicPath
    },

    plugins: [
        new ExtractTextPlugin('css/style.[contenthash:8].css'),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/index.html',
            filename: 'index.html'
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            options: {
                __vueOptions__: vueConfig
            }
        })
    ],

    module: {
        rules: [
            {
                test: /\.vue$/i,
                use: [
                    {
                        loader: 'vue-loader',
                        options: vueConfig
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'sass-loader',
                    options: {
                        indentedSyntax: true
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.styl$/i,
                use: ['style-loader', 'css-loader', 'stylus-loader']
            },
            {
                test: /\.(jpg|png|gif|svg|mp4|ttf)\??.*$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: utils.assetsPath('img/[name].[hash:7].[ext]')
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(projectRoot)
        ],
        extensions: ['.webpack.js', '.web.js', '.js', '.vue'],
        alias: {
            'assets': path.resolve(__dirname, '../src/assets'),
            '~': path.resolve(__dirname, '../src')   //可惜 webstrom 不能识别。
        }
    }

};
