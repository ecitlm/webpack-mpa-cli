const webpack = require('webpack')
const common = require('./webpack.base.conf')
const merge = require('webpack-merge')
const path = require('path')
module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, '../dist/'), // 文件生产存放的路径
    publicPath: './'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env')
    })
  ]
})
