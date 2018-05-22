import env from '../env';

const { NODE_ENV, BUILD_PATH } = env;

export default {
  // context: ROOT_PATH,
  mode: NODE_ENV,

  output: {
    path: BUILD_PATH,
    publicPath: '/'
  },

  optimization: {
    noEmitOnErrors: true
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

  resolve: {
    // Allow absolute paths in imports. Keep in sync with .eslintrc
    modules: ['node_modules', 'src']
    // extensions: ['.js', '.jsx']
  }
};
