const webpack = require('webpack')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const common = require('./webpack.base.conf')
const merge = require('webpack-merge')
const config = require('../config')
module.exports = merge(common, {
  output: {
    path: config.build.assetsRoot, // 文件生产存放的路径
    publicPath: config.build.publicPath
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']), 清除dist
    new webpack.DefinePlugin({
      'process.env': require('../config/prod.env')
    })
  ]
})
