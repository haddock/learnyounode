var http = require('http');

var server = http.createServer(function (request, response) {
  if (request.method === 'POST') {
    request.on("data", function(data) {
      response.write(data.toString().toUpperCase());
    });
    request.on("end", function(data) {
      response.end();
    });
  }
});

server.listen(process.argv[2]);