var fs = require('fs')

module.exports = function (dir, ext, callback) {
  var regex = new RegExp('\\.' + ext + '$')
  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return regex.test(file)
    });

    callback(null, list)
  });
}
