const path = require('path');// pathモジュール
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HardSrcWebpack = require('hard-source-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const src = path.resolve(__dirname, 'src');
const public = path.resolve(__dirname, 'public');
const root = path.resolve(__dirname);

module.exports = {
  // エントリーポイントの設定
  entry: src + '/index.tsx',
  // 出力の設定
  output: {
    path: public,
    publicPath: '/',
    filename: 'bundle.js'
  },
  // modules
  module: {
    rules: [
      {// html
        test: /\.html$/,
        use: ['html-loader']
      },
      {// js
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {// css
        test: /\.(css|sass|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      },
      {// img
        test: /\.(jpg|JPG|jpeg|png|PNG|PING|gif|mp3|svg|ttf|woff2|woff|eot)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[ext]'
            }
          },
        ]
      }
    ]
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html'
    }),
    new HardSrcWebpack(),
    new Dotenv(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@': root
    },
    modules: [src, 'node_modules']
  },
};
