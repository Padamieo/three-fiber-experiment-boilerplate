const config = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');

const DIST_PATH = path.join(process.cwd(), 'dist');

module.exports = {
  ...config,
  devtool: 'eval-source-map',
  devServer: {
    publicPath: '/',
    port: 9000,
    contentBase: DIST_PATH, // static file location
    host: '0.0.0.0',
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    noInfo: false,
    stats: 'minimal',
    hot: true  // hot module replacement. Depends on HotModuleReplacementPlugin
  },
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?sourceMap', 'postcss-loader'],
      },
      {
        test: /\.[t|j]sx?$/,
        include: /node_modules/,
        use: ['react-hot-loader/webpack'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...config.plugins,
  ],
};