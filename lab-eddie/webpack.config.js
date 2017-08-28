'use strict';

const HtmlPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');
const UglifyPlugin = require('uglify-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const {DefinePlugin, EnvironmentPlugin} = require('webpack');

require('dotenv').config({path: `${__dirname}/,dev.env`});
const production = process.env.NODE_ENV === 'production';

let plugins = [
  new EnvironmentPlugin(['NODE_ENV']),
  new ExtractPlugin('bundle-[hash].css'),
  new HtmlPlugin({template: `${__dirname}/src/index.html`}),
  new DefinePlugin({
    __DEBUG__: JSON.stringify(!production)
  })
];

if (production) {
  plugins = plugins.concat([new CleanPlugin(), new UglifyPlugin()]);
}

module.export = {
  plugins,
  devtool: production ? undefined : 'eval',
  devServer: {
    historyApiFallback: true
  },
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/src/build`,
    filename: 'bundle-[hash].js',
    publicPath: process.env.CDN_URL
  },
  module: {
    rules: [
      {
        test: /\.js$/m,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.(woff|woff2|ttf|eot|glyph|\.svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'font/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png|tiff|svg)$/,
        exclude: /\.glyph.svg/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 6000,
              name: 'image/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp3|aac|aiff|wav|flac|m4a|mp4|ogg)$/,
        exclude: /\.glyph.svg/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'audio/[name].[ext]' }
          }
        ]
      }
    ]
  }
};
