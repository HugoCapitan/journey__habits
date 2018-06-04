const path = require('path')
const webpack = require('webpack')

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'src', 'index.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'app.js',
    publicPath: '/dist/'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: [
            ['env', {loose: true, modules: false}],
            'react',
            'react-hmre'
          ],
          plugins: [
            'transform-object-rest-spread'
          ]
        }
      }]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}