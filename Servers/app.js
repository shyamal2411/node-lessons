// console.log("Hey this should be running!");

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    readStream.pipe(res);
}); //server created

server.listen(4000, '127.0.0.1');
console.log('Listening on port 3000');