const path = require('path');
module.exports = {
    entry: "./app/js/main.js",
    output: {
        path: path.resolve(__dirname, "./dest/js"),
        filename: "main.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}