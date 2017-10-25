const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: 'babel-loader',
            },

            { 
                test: /\.html$/, loader: 'html'
            },

            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader!sass-loader',
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.bundle.css'),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ],
    devtool: '#inline-source-map'
}
