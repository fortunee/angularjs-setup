const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './app/app.module.js',
    output: {
        path: path.resolve(__dirname + '/bin/assets'),
        filename: 'app.bundle.js',
        publicPath: '/assets'
    },
    devServer: {
        inline: true,
        contentBase: __dirname + '/bin/assets',
        port: 9090
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: 'babel-loader',
            },
            { test: /\.html$/, loader: 'html' },
            { test: /\.css$/, loader: 'style!css' }
        ]
    },
    devtool: '#inline-source-map'
}
