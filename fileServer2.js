// Since now we know how to use url module according to our needs, we will open file and return it 
// to client parsing the url requested for
var http = require('http');
var url = require('url');
var readFile = require('fs');

// Creating the server
http.createServer(function (req, res){
  var query = url.parse(req.url, true);
  var fileName ='.' + query.pathname;
  // read the file
  readFile.readFile(fileName, function(err, data){
    if(err){
      res.writeHead('400', {'Content-Type':'text/html'});
      return res.end("404 NOT FOUND"); // I would encourage you to remove the return keyword from both the places and try
    }
    res.writeHead('200', {'Content-Type':'text/html'});
      res.write(data);
      return res.end();
  })
}).listen(8080);

