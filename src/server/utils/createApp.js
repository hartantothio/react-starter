var express = require('express');
var compression = require('compression');
var env = require('../env');

// Express instance
var app;

// Returns function that can create the express instance
module.exports = function() {
  if (!app) {
    app = express();

    // Middlewares
    app.use(compression());

    app.use(/\/(js|css|fonts|images)/, function(req, res) {
      res.sendFile(env.BUILD_PATH + req.originalUrl, {
        maxAge: 31556926 // expires 1 year
      });
    });
  }

  return app;
};
