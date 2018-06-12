const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const resolve = dir => {
  return path.join(__dirname, '../', dir);
};

module.exports = {
  devtool: 'inline-source-map',
  enrty: 'src/entry.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.json', '.hbs'],
    alias: {
      '@': resolve('src'),
      '@template': resolve('src/template')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: '../index.template.html'
    }),

    new CleanWebpackPlugin('./dist')
  ]
};
