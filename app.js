var express = require('express'),
	handlebars = require('handlebars'),
	metalsmith = require('metalsmith'),
	// branch = require('metalsmith-branch'),
	collections = require('metalsmith-collections'),
	// excerpts = require('metalsmith-excerpts'),
	markdown = require('metalsmith-markdown'),
	permalinks = require('metalsmith-permalinks'),
	// serve = require('metalsmith-serve'),
	templates = require('metalsmith-templates');
	// watch = require('metalsmith-watch'),
	// moment = require('moment');

var app = express();
var port = 3030;

require('./build.js');

app.use('/posts',express.static('build'));

app.listen(port, function() {
	console.log("Listening on port",port)
}); 


