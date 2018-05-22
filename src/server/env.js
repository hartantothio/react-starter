import path from 'path';

const ROOT_PATH = path.resolve(__dirname, '../../');

const resolvePath = (...args) => path.join(ROOT_PATH, ...args);

const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',

  ROOT_PATH,

  BUILD_PATH: resolvePath('dist'),

  TEMPLATE_FILE: resolvePath('public/index.html')
};

export default {
  ...config,
  resolvePath
};
