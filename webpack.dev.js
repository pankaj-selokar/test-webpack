
const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.config')

module.exports = merge(common, {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'main.[contenthash].js',
        chunkFilename: '[name].bundle.js',   // without hash function
        clean: true,
    },
})