var path = require('path');
var express = require('express');

var app = express();
var PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'build')));

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

app.listen(PORT, function() {
  console.log("Server is up and running on port: " + PORT);
});
