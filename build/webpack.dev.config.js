let webpack = require('webpack');
let webpackConfig = require('./webpack.base.config.js');
// add hot-reload related code to entry chunks
Object.keys(webpackConfig.entry).forEach(function (name) {
    webpackConfig.entry[name] = ['./build/dev-client'].concat(webpackConfig.entry[name])
})

let config = Object.assign({}, webpackConfig, {
    devtool: '#cheap-module-eval-source-map',
    output: Object.assign({}, webpackConfig.output, {
      publicPath: '/',
        filename: '[name].js'
    }),
    plugins: webpackConfig.plugins.concat([
        new webpack.DefinePlugin({
            ENV: JSON.stringify('local'),
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ])
});

module.exports = config;
