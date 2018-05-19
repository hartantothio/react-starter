import merge from 'webpack-merge';
import base from './webpack.config';
import dev from './webpack.config.dev';
import prod from './webpack.config.prod';
import env from '../env';

const { NODE_ENV } = env;
let config;

switch (NODE_ENV) {
  case 'production':
    config = prod;
    break;

  default:
    config = dev;
}

export default merge(base, config);
