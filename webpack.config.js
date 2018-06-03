const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './app/main.js',
    output: {
        path: path.join(__dirname, '/public/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
            },
            {
              test: /\.vue$/,
              exclude: /node_modules/,
              use: {
                loader: 'vue-loader'
              }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};