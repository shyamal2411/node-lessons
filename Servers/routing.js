// console.log("Hey this should be running!");

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/second.html').pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/api/ninjas') {
        var sg = [{ name: 'Shyamal', age: 24 }, { name: 'Prajapati', age: 12 }];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(sg));
    } else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
}); //server created

server.listen(4000, '127.0.0.1');
console.log('Listening on port 4000');