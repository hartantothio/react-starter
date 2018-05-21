import path from 'path';
import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import env from '../env';

const { resolvePath, ROOT_PATH, BUILD_FOLDER, TEMPLATE_FILE } = env;

export default {
  devtool: 'source-map',
  entry: {
    app: [resolvePath('src/client.js')]
  },
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
    filename: '[name].[hash:8].js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CleanWebpackPlugin([BUILD_FOLDER], { root: ROOT_PATH }),
    new HtmlWebPackPlugin({
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
