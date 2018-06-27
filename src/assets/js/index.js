/* global  */
import '../css/common.scss'
import './news.js'

console.log(process.env)
if (process.env.NODE_ENV === 'development') {
}

if (process.env.NODE_ENV !== 'production') {
  const VConsole = require('vconsole')
  const vConsole = new VConsole()
  console.log(vConsole)
}
