var express = require('express');
var app = express();
var port = 3030;

require('./build.js');

app.use('/posts',express.static('dest'));

app.listen(port, function() {
	console.log("Listening on port",port)
}); 


