import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import errorOverlayMiddleware from 'react-dev-utils/errorOverlayMiddleware';
import webpackConfig from './configs/webpack.config.babel';
import createApp from './utils/createApp';

// Express instance
const app = createApp();
const compiler = webpack(webpackConfig);

app.use(errorOverlayMiddleware());

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res, next) => {
  const filename = path.join(compiler.outputPath, 'index.html');

  // https://github.com/jantimon/html-webpack-plugin/issues/145
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err);
    }

    res.set('content-type', 'text/html');
    res.send(result); // can be converted to string by calling result.toString('utf8')
    res.end();
  });
});

require('./serve');
