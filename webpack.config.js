var path = require('path');
var webpack = require('webpack');

var SRC_DIR = path.resolve(__dirname, 'src');
var ROOT_DIR = path.resolve(__dirname, '');

config = {
  entry: SRC_DIR + '/index.jsx',
  output: {
    path: ROOT_DIR,
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.js|\.jsx$/,
        include: [SRC_DIR],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [ 'es2015', 'react' ],
          plugins: [ 'transform-es2015-destructuring', 'transform-object-rest-spread' ]
        }
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
  ],
  resolve: {
    modules: [ SRC_DIR, path.resolve('./node_modules') ]
  },
}

module.exports = [config];
