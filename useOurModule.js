// import http module
var http = require('http');
// file name 
var date = require('./createModules');

// this method is executed when someone tries to access the computer at port 8080
http.createServer(function  (req, res) {
  res.writeHead(200, {'content-Type': 'text/html'}); // if the response supposed to be displayed as HTML
  res.write("Date and time is : " + date.getDateTime()); // Writes the response to the client
  res.end();// end the response 
}).listen(8080); // listen to the port at 8080

// remove the writeHead and you will be able to observe the difference in the text