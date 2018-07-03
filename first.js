// http is a built-in module here. Think of modules as the libraries in JavaScript.
// Require function is reuired to include a module.
var http = require('http');

// Using http module, web server is created
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);