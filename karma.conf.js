/* jshint node: true */
'use strict';


module.exports = function(config) {
  config.set({
    browsers: [
      'Chrome'
    ],

    frameworks: [
      'jasmine'
    ],

    files: [
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
        loaders: [
          { test: /\.less$/,
            loaders: ['style', 'css?sourceMap', 'less']},

          { test: /\.(jsx|js)$/,
            include: [/src/, /test/],
            loader: 'babel?experimental'},

          // static assets files
          { test: /\.gif$/,
            loader: 'url?limit=10240&mimetype=image/gif'},

          { test: /\.jpg$/,
            loader: 'url?limit=10240&mimetype=image/jpg'},

          { test: /\.png$/,
            loader: 'url?limit=10240&mimetype=image/png'},

          { test: /\.svg$/,
            loader: 'url?limit=20480&mimetype=image/svg+xml'},

          { test: /\.(woff2|woff|ttf|eot)$/,
            loader: 'url'}
        ]
      },
      resolve: {
        extensions: ['', '.js', '.jsx', '.json']
      }
    },

    webpackServer: {
      noInfo: true  // no "spam" in the console when running in Karma?
    }
  });
};
