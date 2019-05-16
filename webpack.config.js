var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: './index.js',
    },
    module: {
        rules: [
            {
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env']
                    }
                },
            }
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '*']
    }
};