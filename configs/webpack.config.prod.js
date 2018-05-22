import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import env from '../env';

const { ROOT_PATH, BUILD_PATH, TEMPLATE_FILE } = env;

export default {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[hash:base64]',
              sourceMap: false,
              minimize: false
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'js/[name].[hash:8].js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CleanWebpackPlugin([path.basename(BUILD_PATH)], { root: ROOT_PATH }),
    new HtmlWebpackPlugin({
      template: TEMPLATE_FILE,
      filename: path.basename(TEMPLATE_FILE)
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: true,
        // dropDebugger: true,
        // dropConsole: true,
        mangle: true,
        output: {
          comments: false,
          beautify: false
        },
        warnings: false
      }
    })
  ]
};
