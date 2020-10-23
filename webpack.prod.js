const merge = require('webpack-merge');
const common = require('./webpack.common.js');// 共通設定

const terserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new terserPlugin({
        terserOptions: {
          compress: { drop_console: true }
        }
      })
    ]
  }
});