var express = require('express');
var path = require('path');

var app = express();

app.use("/public", express.static(__dirname + '/dist/public'));

app.get("/", function(request, response) {
    response.redirect('/public');
});

var server = app.listen(3000, "localhost", function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

module.exports = app;
