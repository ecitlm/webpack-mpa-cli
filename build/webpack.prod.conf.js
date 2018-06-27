const webpack = require('webpack')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const common = require('./webpack.base.conf')
const merge = require('webpack-merge')
const chalk = require('chalk')
const config = require('../config')
console.log(chalk.blue('building for production...'))
module.exports = merge(common, {
  output: {
    path: config.build.assetsRoot, // 文件生产存放的路径
    publicPath: config.build.publicPath
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/prod.env')
    })
  ]
})
