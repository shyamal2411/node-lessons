var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
var todoController = require('./controllers/todoController');
app.use('/assets', express.static('/Todo'));

// localhost:3000/assets/styles.css

// fire controllers
todoController(app);

app.listen(3000);
console.log("listening on port 3000");