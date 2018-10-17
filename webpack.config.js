const path = require('path');

module.exports = {
  // entry: "./src/index.js",
  entry: {
    app: './src/index.js',
    hello: './src/hello.js'
  },
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
          //   plugins: [require('@babel/plugin-transform-arrow-functions')]
          // }
        }
      }
    ]
  },
  mode: 'development'
}
