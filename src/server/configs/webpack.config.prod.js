import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCssAssetsWebpackPlugins from 'optimize-css-assets-webpack-plugin';
import UglifyJsWebpackPlugin from 'uglifyjs-webpack-plugin';
import env from '../env';

const { resolvePath, TEMPLATE_FILE, BUILD_PATH, ROOT_PATH } = env;

export default {
  devtool: 'source-map',

  entry: {
    app: [resolvePath('src/client/index.js')]
  },

  output: {
    filename: 'js/[name].[hash:8].js'
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
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },

  optimization: {
    noEmitOnErrors: true,
    minimizer: [
      new UglifyJsWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsWebpackPlugins()
    ]
  },

  plugins: [
    new CleanWebpackPlugin([path.basename(BUILD_PATH)], { root: ROOT_PATH }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
      chunkFilename: 'css/[id].[hash:8].css',
      path: '/'
    }),
    new HtmlWebpackPlugin({
      template: TEMPLATE_FILE,
      filename: path.basename(TEMPLATE_FILE)
    }),
    new UglifyJsWebpackPlugin({
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
