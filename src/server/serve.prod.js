var fs = require('fs');
var env = require('./env');
var app = require('./utils/createApp')();
var resolvePath = env.resolvePath;
var template = fs.readFileSync(resolvePath('dist/index.html'), 'utf8');

app.get('*', function(req, res) {
  res.set('content-type', 'text/html');
  res.send(template);
  res.end();
});

require('./serve');
