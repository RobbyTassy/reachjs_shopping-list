var config = require('./webpack.config.js');
var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    }
}
