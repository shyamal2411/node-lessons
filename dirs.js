var fs = require('fs');

// fs.unlink('file.txt')
// console.log("Hii Drashti");

// fs.rmdirSync('stuff')
fs.mkdir('stuff',function(){
    fs.readFile('file.txt','utf8', function(err, data){
        fs.writeFile('./stuff/write.txt', data);
    })
});