'use strict'
// Template version: 1.2.8
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsRoot: path.resolve(__dirname, '../dist/'),
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://test.it919.cn/api', // 内测环境
        changeOrigin: true,
        logLevel: 'debug'
      }
    },

    host: '0.0.0.0',
    port: 8888,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false
  },
  build_test: {
    // Template for index.html
    assetsSubDirectory: 'static',
    assetsRoot: path.resolve(__dirname, '../dist_test'),
    publicPath: '/'
  },
  build: {
    assetsSubDirectory: 'static',
    assetsRoot: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  }
}
