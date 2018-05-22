/* eslint-disable no-console */
import path from 'path';
import express from 'express';
import compression from 'compression';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import errorOverlayMiddleware from 'react-dev-utils/errorOverlayMiddleware';
import openBrowser from 'react-dev-utils/openBrowser';
import webpackHotClient from 'webpack-hot-client';
import webpackConfig from './configs/webpack.config.babel';
import env from './env';

const { NODE_ENV, BUILD_PATH } = env;

const app = express();

// Middlewares
app.use(compression());

// Only for development
if (NODE_ENV === 'development') {
  app.use(errorOverlayMiddleware());
  const compiler = webpack(webpackConfig);

  webpackHotClient(compiler);

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath
    })
  );
  app.use(webpackHotMiddleware(compiler));

  // Serve static assets from public/
  // app.use(express.static(DIST_DIR));

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
} else if (NODE_ENV === 'production') {
  // For production, should only read from public/dist
  app.use(express.static(BUILD_PATH));
  // app.get('*', (req, res) => res.sendFile(BUILD_FILE));
}

// Proxy to API server
app.use('/api', (req, res) => {
  console.log('Serve from API');
  res.end();
});

app.listen(3000, err => {
  if (err) {
    console.error(err);
  } else {
    if (openBrowser('http://localhost:3000')) {
      console.info('The browser tab has been opened');
    }
    console.info('Example app listening on port 8080!');
  }
});
