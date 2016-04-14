var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: __dirname
    },
   {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname
    },
    { test: /\.(png|jpg)$/, loader: 'file-loader?limit=8192'},
    /*,
    { 
      test: /\.css$/, loaders: ['style', 'css'] },
    { test: /\.(png|jpg)$/, loader: 'file-loader?limit=8192'},
    { test: /\.(woff|ttf)$/, loader: 'file-loader'}*/
    ]
  }
};