// var http = require('http');
// var server = http.createServer(function(req,res){
//     server.write("hello world");


// });
// server.listen(5000);
// console.log("Server is running on port 5000");

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.write('<html><h1>Hello World!</h1></html>');
  res.end();
}).listen(8080);