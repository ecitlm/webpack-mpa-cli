const webpack = require('webpack')
const common = require('./webpack.base.conf')
const merge = require('webpack-merge')
const config = require('../config')
module.exports = merge(common, {
  output: {
    path: config.build_test.assetsRoot, // 文件生产存放的路径
    publicPath: config.build_test.publicPath
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env')
    })
  ]
})
