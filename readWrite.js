// console.log("Am I working?");
var fs = require('fs');

fs.readFile('file.txt', 'utf8', function(err, data){
    fs.writeFile('readme.txt',data);
    // console.log(data);
});
// console.log("testing it");
// fs.unlink('write.txt');
// fs.writeFileSync('write.txt', read);