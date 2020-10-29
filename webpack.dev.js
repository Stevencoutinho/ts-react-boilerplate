const merge = require('webpack-merge');
const common = require('./webpack.common.js');// 共通設定
const path = require('path');
const api_url = process.env.API_URL;
const api_name = process.env.API_NAME;

module.exports = merge(common, {
  mode: 'development',
  plugins: [],
  devtool: '#inline-source-map',
  devServer: {
    inline: true,
    open: true,
    contentBase: path.join(__dirname, 'src'),
    publicPath: '/',
    historyApiFallback: true,
    watchContentBase: true,
    // host: '127.0.0.1',
    port: 3000,
    proxy: {
      '/api-name': {
        target: 'http://localhost:8080',
        pathRewrite: { ["^/api-name"]: "" }
      }
    }
  }
});
