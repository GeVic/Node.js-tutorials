// Node.js as File server
// file system module in node.js allow you to work with the file system on our computer.
var fileSystem = require('fs'); // can create, read, update delete, rename file
var http = require('http');

// To read files i.e. fileSystem.readFile(). Say you have html file name operationTest.html
http.createServer(function (req, res){
  fileSystem.readFile('operationTest.html', function (err, data){ // reads the entire content of the file asynchronously
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(data);
    res.end();  
  });
}).listen(8080)

// basicly you can run your html files using this

// Create files using appendFile (created if not present)
fileSystem.appendFile('createFile.txt', 'Yupee created!', function(err){
  if(err) throw err;
  console.log('Saved!');
});

// open method
fileSystem.open('createFile.txt', 'w', function(err, file){
  if(err) throw err;
  console.log('opened!');
})

// write file (replaces the file content if exist with the specified one, if not then new file is created)
fileSystem.writeFile('createFile.txt', 'Is the content replaced?', function(err){
  if(err) throw err;
  console.log('Replaced!');
})

// Delete files. Method used is unlink
fileSystem.unlink('createFile.txt', function(err){
  if(err) throw err;
  console.log('Deleted!');
})

// renaming files
file.rename('createFile.txt', 'renamed.txt', function(err){
  if(err) throw err;
  console.log(err);
})
