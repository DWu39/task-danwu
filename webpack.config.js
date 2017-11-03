const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const ExtractTextPluginConfig = new ExtractTextPlugin('styles.css');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './client/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader'
      }
    ]
  },
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  plugins: [
    ExtractTextPluginConfig,
    HtmlWebpackPluginConfig
  ]
}
