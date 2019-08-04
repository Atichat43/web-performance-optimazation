const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = webpackEnv => {
  const isEnvDevelopment = webpackEnv === 'development';
  return {
    entry: {
      app: path.join(__dirname, 'src', 'index.js')
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: isEnvDevelopment
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  require('postcss-preset-env')({
                    autoprefixer: {
                      flexbox: 'no-2009',
                    },
                    stage: 3,
                  })
                ],
                sourceMap: isEnvDevelopment
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isEnvDevelopment
              }
            }
          ]
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
          MapboxAccessToken: JSON.stringify(process.env.MapboxAccessToken),
        }
      }),
      new BundleAnalyzerPlugin({
        analyzerMode:'disabled', 
        generateStatsFile: true
      }),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        }
      }),
      new MiniCssExtractPlugin({
        filename: 'style.[hash].css',
        chunkFilename: '[name].[hash].css'
      }),
      new LodashModuleReplacementPlugin({
        shorthands: true
      }),
    ].filter(Boolean)
  }
};
