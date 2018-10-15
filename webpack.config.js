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
  mode: 'development'
}
