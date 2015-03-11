/* jshint node: true */
'use strict';

var path = require('path');

var webpackLoadersConfig = require('./webpack/loaders.config');
var webpackPluginsConfig = require('./webpack/plugins.config');
var webpackResolveConfig = require('./webpack/resolve.config');


module.exports = {
  entry: {
   todos: './src/todos/app.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },

  module: {
    loaders: webpackLoadersConfig
  },

  plugins: webpackPluginsConfig,

  resolve: webpackResolveConfig
};
