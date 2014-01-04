var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
  if (request.method === 'GET') {
    var parsedUrl = url.parse(request.url, true);
    var date = new Date(parsedUrl.query['iso']);
    response.writeHead(200, { 'Content-Type': 'application/json'});
    if (parsedUrl.pathname === '/api/parsetime') {
      response.end('{"hour":' + date.getHours() + ',"minute":' + date.getMinutes() + ',"second":' + date.getSeconds() + '}');
    } else if (parsedUrl.pathname === '/api/unixtime') {
      response.end('{"unixtime":' + date.valueOf() + '}');
    }
  }
});

server.listen(process.argv[2]);