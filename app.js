var express = require('express');
var app = express();
var port = 3030;

require('./build.js');

app.use('/',express.static('dest'));
app.use('/',express.static('files'));

app.listen(port, function() {
	console.log("Listening on port",port)
}); 