/* Event-driven callbacks */

var http = require("http");

function onRequest(request, response){
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
};

http.createServer(onRequest).listen(8888);

console.log("Server has started.");

// 가장 기본 코드
// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(8888);
