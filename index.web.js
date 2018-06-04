const express = require('express')
const http    = require('http')
const path    = require('http')

const server  = express()
const app     = require

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const webpackConfig = require(path.resolve(__dirname, 'webpack.config.js'))
const compiler = webpack(webpackConfig)

server.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  quiet: true,
  publicPath: webpackConfig.output.publicPath
}))

server.use(webpackHotMiddleware(compiler, {
  quiet: true
}))

http.Server(server).listen(8080, () => {
  console.log("Server listening on port 8080")
})
