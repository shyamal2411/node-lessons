var express = require('express');
var app = express();
app.set('view engine', 'ejs');

// const cors = require('cors');
// app.use(cors());

app.get('/',function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/grade', function(req, res){
    res.sendFile(__dirname + '/grade.html');
});
app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/admin.html');
  });

app.get('/profile/:name', function(req, res) {
    // res.send('You are at the profile page ' + req.params.id);
    res.render('profile', {person: req.params.name});
});


app.listen(4000);