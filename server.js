var express = require('express');
var app = express();

var db = require('./database');

app.set('port', process.env.PORT || 3000);
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  var rows = [];
  var query = db.query('SELECT * FROM posts');
  query.on('row', function(row, result) {
      rows.unshift(row.data);
  });
  query.on('end', function(result) {
    res.render('index', {
      articles: rows
    });
  });
});

app.get('/write', function(req, res) {
  res.render('write');
});

var server = app.listen(app.get('port'), function() {
  console.log('Node server started on port ' + app.get('port'));
});

var io = require('socket.io')(server);
io.on('connection', function(socket) {
  console.log("User connected.");

  socket.on('disconnect', function() {
    console.log("User disconnected.");
  });

  socket.on('testblogpost', function(post) {
    db.query("INSERT INTO posts(data) VALUES($1)", [JSON.stringify(post)]);
  });
});
