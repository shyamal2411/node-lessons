var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var writeStream = fs.createWriteStream(__dirname + '/writeme.txt');

// the below code changes to
// readStream.on('data', function(chunk){
//        console.log('new chunk received');
//        writeStream.write(chunk);
//    });

readStream.pipe(writeStream);