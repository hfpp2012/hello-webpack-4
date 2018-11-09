const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

let pathsToClean = [
  'dist'
]

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
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.less$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'less-loader' // compiles Less to CSS
        ]
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
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new CleanWebpackPlugin(pathsToClean)
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  mode: 'development'
}
