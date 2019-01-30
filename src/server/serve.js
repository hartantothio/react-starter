/* eslint-disable no-console */
var openBrowser = require('react-dev-utils/openBrowser');
var app = require('./utils/createApp')();
var env = require('./env');
var NODE_ENV = env.NODE_ENV;
var PORT = env.PORT;

// Start the server
app.listen(PORT, function(err) {
  var host = 'http://localhost:' + PORT;

  if (err) {
    console.error(err);
  } else {
    if (NODE_ENV === 'development') {
      if (openBrowser && openBrowser(host)) {
        console.info('The browser tab has been opened');
      }
    }

    console.info('===> Listening on port %s.', PORT);
  }
});
