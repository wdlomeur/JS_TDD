const webpack = require('webpack');
const nodeENV = process.env.NODE_ENV || 'production';

//Melhor performace e menos completo
//devtool: 'cheap-eval-source-map',
//Intermediário
//devtool: 'eval-source-map',
//Mais completo, menos performático
//devtool: 'source-map',
module.exports = {
  devtool: 'source-map',
  entry: {
    filename: '.\\app.js'
  },
  output: {
    filename: 'build.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: [
          ['es2015', {
            modules: false
          }]
        ]
      }
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMAP: true
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeENV) }
    })
  ]
}
