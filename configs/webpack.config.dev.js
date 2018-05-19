import webpack from 'webpack';
import env from '../env';

const { BUILD_PATH } = env;

export default {
  devServer: {
    contentBase: BUILD_PATH,
    historyApiFallback: true,
    hot: true
  },
  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: ['react-hot-loader/patch', 'webpack-hot-middleware/client']
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
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].js'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
