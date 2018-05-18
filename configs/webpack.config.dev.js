const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const rootPath = path.join(__dirname, '..');
const outputPath = path.join(rootPath, 'public/dist');
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(rootPath, 'public/index.html'),
  filename: 'index.html'
});

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: path.join(rootPath, 'index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
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
  plugins: [
    new CleanWebpackPlugin([outputPath]),
    new webpack.HotModuleReplacementPlugin(),
    htmlPlugin
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: outputPath,
    historyApiFallback: true,
    hot: true,
    port: 3001
  }
};
