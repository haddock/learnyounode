var net = require('net');
var server = net.createServer(function (socket) {
  var date = new Date();
  socket.write(date.getFullYear() + '-' +
    pad2(date.getMonth() + 1) + "-" +
    pad2(date.getDate()) + ' ' +
    pad2(date.getHours()) + ':' +
    pad2(date.getMinutes()) + '\n');
  socket.end();
});
server.listen(process.argv[2]);

function pad2(number) {  
  return (number < 10 ? '0' : '') + number;
}