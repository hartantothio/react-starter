import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import env from '../env';

const { resolvePath, TEMPLATE_FILE } = env;

export default {
  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: [
      resolvePath('src/client/webpackHotDevClient.js'),
      resolvePath('src/client/index.js')
    ]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'eslint-loader',
            options: {
              emitWarning: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: TEMPLATE_FILE,
      filename: path.basename(TEMPLATE_FILE)
    })
  ]
};
