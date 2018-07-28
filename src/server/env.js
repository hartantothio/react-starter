var path = require('path');
var ROOT_PATH = path.resolve(__dirname, '../../');
var resolvePath = (...args) => path.join(ROOT_PATH, ...args);
var config = {
  PORT: process.env.PORT || 3000,

  NODE_ENV: process.env.NODE_ENV || 'development',

  ROOT_PATH,

  BUILD_PATH: resolvePath('dist'),

  TEMPLATE_FILE: resolvePath('static/index.html')
};

module.exports = Object.assign({ resolvePath: resolvePath }, config);
