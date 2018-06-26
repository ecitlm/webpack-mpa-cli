const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const utils = require('./utils')
// const autoprefixer = require('autoprefixer')
// const WebpackDevServer = require('webpack-dev-server') // webpack server 服务
const path = require('path')
module.exports = {
  entry: {
    index: ['./src/assets/js/index.js']
  },
  output: {
    filename: utils.assetsPath('js/[name].[hash].js'),
    path: path.resolve(__dirname, '../dist/'), // 文件生产存放的路径
    publicPath: './'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        publicPath: '../',
        use: [{
          loader: 'css-loader',
          options: {
            minimize: true, // css压缩,
            importLoaders: 1

          }
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: (loader) => [
              require('autoprefixer')({
                broswers: ['last 5 versions']
              })
            ]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
        ]
      })
    }, {
      test: /\.(png|gif|jpe?g)$/,
      loader: 'url-loader',
      query: {
        limit: 3500,
        name: 'images/[name].[ext]'
      }
    }, {
      // 文件加载器，处理文件静态资源
      test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
      query: {
        limit: 1000,
        name: 'fonts/[name].[ext]'
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader', //
      exclude: /node_modules/ // 需要排除的目录
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['index'],
      minify: { // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true // 删除空白符与换行符
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // warnings: false
      }
    }),
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/bundle.min.css?version=[hash]')
    }),
    new webpack.HotModuleReplacementPlugin(), // 热加载插件
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })

  ]
}
