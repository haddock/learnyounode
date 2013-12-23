var fs = require('fs');

var regex = new RegExp('\\.' + process.argv[3]);
var buf = fs.readdir(process.argv[2], function (err, list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i] && 0 !== list[i].length && regex.test(list[i]))
      console.log(list[i]);
  }
});