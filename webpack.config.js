const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // entry: "./src/index.js",
  entry: {
    // app: ["@babel/polyfill", './src/index.js'],
    app: './src/index.js',
    hello: './src/hello.js'
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name]-[hash].bundle.js"
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
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Admin',
      filename: 'admin.html',
      template: 'public/index.html',
      chunks: ["hello"]
    }),
    new HtmlWebpackPlugin({
      title: 'Index',
      filename: 'index.html',
      template: 'public/index.html',
      chunks: ["app"]
    })
  ],
  mode: 'development'
}
