var http = require('http');
var pages = ["", "", ""];
var counter = 0;

for (var i = 0; i < 3; i++) {
  fetch(i);
}

function fetch(index) {
  http.get(process.argv[2 + index], function(response) {
    response.on("data", function(data) {
      pages[index] = pages[index] + data.toString();
    });
    response.on("end", function(data) {
      counter++;
      if (counter == 3) {
        for (var i = 0; i < 3; i++) {
          console.log(pages[i]);
        }
      }
    });
  });
}