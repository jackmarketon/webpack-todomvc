/* jshint node: true */
'use strict';

var path = require('path');

var webpack = require("webpack");
var webpackLoadersConfig = require('./webpack/loaders.config');
var webpackResolveConfig = require('./webpack/resolve.config');

var PROD = JSON.parse(process.env.PROD_DEV || "0");


module.exports = {
  entry: {
   todos: './src/todos/app.jsx',
  },
  output: {
    filename: PROD ? '[name].bundle.min.js' : '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },

  module: {
    loaders: webpackLoadersConfig
  },

  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ] : [],

  resolve: webpackResolveConfig
};
