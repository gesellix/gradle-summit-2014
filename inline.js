(function () {
  "use strict";

  var port = 1111;
  var fs = require('fs');
  var http = require('http');
  var Inliner = require('inliner');
  require('./server');

  new Inliner('http://localhost:' + port, function (html) {
    var req = http.request({
                             hostname: 'localhost',
                             port: port,
                             path: '/shutdown',
                             method: 'POST'
                           });
    req.on('error', function (e) {
      console.log('problem with request: ' + e.message);
    });
    req.end();

    fs.writeFile('inline.html', html, function (err) {
      if (err) {
        throw err;
      }
      console.log('saved "inline.html".');
      process.exit();
    });
  });

})();