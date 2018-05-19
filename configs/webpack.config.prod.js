import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

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
    filename: '[name].[hash:8].js'
  },
  plugins: [
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
