const dev = require('./webpack/webpack.dev.js');
const prod = require('./webpack/webpack.prod.js');

const TARGET = process.env.npm_lifecycle_event;

if(TARGET === 'dev') {
  module.exports = dev
}

if(TARGET === 'prod') {
  module.exports = prod
}
