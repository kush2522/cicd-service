var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("<h1> Test is successful with v2.0.</h1>");
}
var www = http.createServer(handleRequest);
www.listen(8080);
