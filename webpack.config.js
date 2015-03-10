/* jshint node: true */
'use strict';

var path = require('path');


module.exports = {
  entry: {
   todos: './src/todos/app.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },

  module: {
    loaders: [
      { test: /\.css$/,
        loaders: ['style', 'css?sourceMap']},

      { test: /\.less$/,
        loaders: ['style', 'css?sourceMap', 'less']},

      { test: /\.(jsx|js)$/,
        include: /src/,
        loader: 'babel?experimental&optional=runtime'},

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
  },

  plugins: [
  ]
};
