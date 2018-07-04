// Node.js is the server side enviroment and thus the backbone to the application
// Most important thing we do on internet is share. But to that we have to upload 
// files.
// Let's buid a small application to let people upload files
var formidable = require('formidable'); // Awesome module to work with file uploads. Use 'npm' to get it
var http = require('http');
var fs = require('fs');

// create the server
http.createServer(function(req, res){
  // Here we need to handle the req to upload file
  if(req.url == '/fileupload'){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
      // if want to change the place file got saved use rename since it gets saved in temp folder by default
      var old = files.filetoupload.path;
      var newpath = 'C:/Users/GeVic/AppData/Local/Temp/' + files.filetoupload.name;
      fs.rename(old, newpath, function(err){
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  } else {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<form action='fileupload' method='post' enctype='multipart/form-data'>");
  res.write("<input type = 'file' name='filetoupload'><br>");
  res.write("<input type = 'submit'>");
  res.write("</form>");
  return res.end();
  }
}).listen(8080);

