import merge from 'webpack-merge';
import devConfig from './webpack.config.dev';
import prodConfig from './webpack.config.prod';
import env from '../env';

const { NODE_ENV, BUILD_PATH } = env;

export default merge(
  {
    // context: ROOT_PATH,
    mode: NODE_ENV,

    output: {
      filename: '[name].js',
      path: BUILD_PATH,
      publicPath: '/'
    },

    resolve: {
      // Allow absolute paths in imports. Keep in sync with .eslintrc
      modules: ['node_modules', 'src/client'],
      extensions: ['.js', '.jsx', 'css', 'scss']
    }
  },
  NODE_ENV === 'production' ? prodConfig : devConfig
);
