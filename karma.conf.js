/* jshint node: true */
'use strict';

var webpackLoadersConfig = require('./webpack/loaders.config');
var webpackPluginsConfig = require('./webpack/plugins.config');
var webpackResolveConfig = require('./webpack/resolve.config');


module.exports = function(config) {
  config.set({
    browsers: [
      'Firefox'
    ],

    frameworks: [
      'jasmine'
    ],

    files: [
      {pattern: 'src/**/*.{css,jsx,js,less}', included:false, served:false, watched:true},
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },

    reporters: [
      'dots'
    ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: webpackLoadersConfig
      },
      plugins: webpackPluginsConfig,
      resolve: webpackResolveConfig
    },

    webpackServer: {
      noInfo: true  // no "spam" in the console when running in Karma?
    }
  });
};
