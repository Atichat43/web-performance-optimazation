const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const BrotliPlugin = require('brotli-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common('produciton'), {
  mode: 'production',
  optimization: {
    nodeEnv: 'production',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          output: {
            comments: false,
          },
          compress: {
            drop_console: true,
            drop_debugger: true
          }
        },
      }),
      new OptimizeCSSAssetsPlugin(),
    ]
  },
  plugins: [
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.7
    })
  ]
});
