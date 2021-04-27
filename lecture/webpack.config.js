const path = require('path');

module.exports = {
    name : 'wordrelay-setting',
    mode: 'development', //실서비스에서는 production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client'],
    },  //입력

    module: {
        rules: [{
           test: /\.jsx?$/,
           loader: 'babel-loader',
           options: {
               presets: ['@babel/env', '@babel/react'],
               plugins: ['@babel/plugin-proposal-class-properties'],
           },
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'), // \lecture\dist
        filename: 'app.js'
    },  //출력
};