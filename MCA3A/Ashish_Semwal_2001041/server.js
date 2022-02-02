
var http = require('http');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello There Server running successfully');
  res.end();
}).listen(8080);
console.log("Server running on port 8080");
