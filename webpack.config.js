const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputPath = path.join(__dirname, 'public/dist');
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, 'public/index.html'),
  filename: 'index.html'
});

module.exports = {
  entry: {
    app: path.join(__dirname, 'index.js')
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
  plugins: [new CleanWebpackPlugin([outputPath]), htmlPlugin],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    port: 3001
  }
};
