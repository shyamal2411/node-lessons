var express = require('express');
var app = express();

app.get('/',function(req, res){
    res.send('You are at the home page');
});

app.get('/help', function(req, res){
    res.send('You are at the help page');
});

app.listen(4000);