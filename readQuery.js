var http = require('http');

// create the server. req arguement here represent the request from the client, as an object
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url); // reads the query and write it to the client
  res.end();
}).listen(8080);

// if you run the program with localhost:8080/anyName
// output should be '/anyName'