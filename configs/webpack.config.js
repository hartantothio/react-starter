import path from 'path';
import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import env from '../env';

const {
  resolvePath,
  NODE_ENV,
  ROOT_PATH,
  BUILD_FOLDER,
  BUILD_PATH,
  TEMPLATE_FILE
} = env;

export default {
  // context: ROOT_PATH,
  mode: NODE_ENV,

  entry: {
    app: [resolvePath('src/client.js')]
  },

  output: {
    path: BUILD_PATH
  },

  module: {
    // makes missing exports an error instead of warning
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CleanWebpackPlugin([BUILD_FOLDER], { root: ROOT_PATH }),
    new HtmlWebPackPlugin({
      template: TEMPLATE_FILE,
      filename: path.basename(TEMPLATE_FILE)
    })
  ],

  resolve: {
    // Allow absolute paths in imports. Keep in sync with .eslintrc
    modules: ['node_modules', 'src']
    // extensions: ['.js', '.jsx']
  }
};
