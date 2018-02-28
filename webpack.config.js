const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/js/index.js'],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js'
  },
  devServer: {
    // contentBase: path.resolve(__dirname, 'src'),
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]-[local]'
            }
          },
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/scss/resources/variables.scss',
                './src/scss/resources/fonts.scss',
                './src/scss/resources/mixins.scss',
                './src/scss/resources/antd.scss',
                './src/scss/main.scss'
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};
