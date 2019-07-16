const webpack = require('webpack');
const path = require('path');

module.exports = [{
    cache: true,
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
    },
    context: path.resolve(__dirname, 'src'),
    entry: './Routes.tsx',
    output: {
        filename: 'js/build.js'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            'node_modules'
        ],
        extensions: ['.ts', '.tsx', '.js'],
    },
}];
