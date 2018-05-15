import merge from 'webpack-merge';
import base from './webpack.config';
import dev from './webpack.config.dev';
import prod from './webpack.config.prod';
import env from '../env';

const { NODE_ENV } = env;
const config = NODE_ENV === 'production' ? prod : dev;

export default merge(base, config);
