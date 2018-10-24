const path = require('path');

module.exports = {
  // entry: "./src/index.js",
  entry: {
    app: ["@babel/polyfill", './src/index.js'],
    hello: './src/hello.js'
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: [['@babel/preset-env', { "debug": true }]],
          //   plugins: [["@babel/plugin-proposal-decorators", { "decoratorsBeforeExport": true }]]
          // }
          // options: {
          //   plugins: [require('@babel/plugin-transform-arrow-functions')]
          // }
        }
      }
    ]
  },
  mode: 'development'
}
