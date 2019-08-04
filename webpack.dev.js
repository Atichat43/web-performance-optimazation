const common = require('./webpack.common.js');
const merge = require('webpack-merge');

module.exports = merge(common('development'), {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
});
