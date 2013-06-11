var backlog = require('../index.js') var http = require('http');
http.createServer(function(req, res) {
  res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
backlog.settings({
    log_name: 'jared'
  });
backlog.init();
backlog.retrieve(5, 'jared.log')