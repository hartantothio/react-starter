import path from 'path';

const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',

  ROOT_PATH: path.resolve(__dirname),

  BUILD_PATH: path.resolve(__dirname, 'dist'),

  TEMPLATE_FILE: path.resolve(__dirname, 'public/index.html')
};

const resolvePath = (...args) => path.join(config.ROOT_PATH, ...args);

export default {
  ...config,
  resolvePath
};
