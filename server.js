(function () {
  "use strict";

  var server;
  var express = require('express');
  var app = express();
  app.use(require("compression")());

  app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
  });
  app.get(/(.+)/, function (req, res, next) {
    express.static(__dirname)(req, res, next)
  });

  app.post("/shutdown", function () {
    server.close();
  });

  var port = process.env.PORT || 1111;
  server = app.listen(port);
  console.log('server is listening on port ' + port);
})();