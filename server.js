var express = require('express');
var app = express();
var port = process.env.PORT || 3e3;

app.get("/", function(req, res) {
  var body = "It works!";
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.listen(port);

console.log('Listening on port' + port);