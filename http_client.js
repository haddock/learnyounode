var http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
  response.on("data", function(data) {
    console.log(data.toString());
  });
}).on('error', function(error) {
  console.log("Got error: " + error.message);
});