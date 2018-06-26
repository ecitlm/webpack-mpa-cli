const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../config')
const common = require('./webpack.base.conf')

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, './dist/'),
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist',
    host: config.dev.host,
    open: true,
    useLocalIp: true,
    overlay: true,
    port: config.dev.port, // 端口号
    proxy: config.dev.proxyTable // 配置代理
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    })
  ]
})
