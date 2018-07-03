var http = require('http');
var url = require('url');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  var query = url.parse(req.url, true).query;
  var text = query.year + " " + query.month;
  res.end(text);
}).listen(8080);