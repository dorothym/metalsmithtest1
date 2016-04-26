var metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');

metalsmith(__dirname)
    .source('./src')
    .destination('./build')
    .use(layouts({
        engine: 'handlebars',
        directory: 'templates'
    }))
    .use(permalinks({pattern: 'posts/:title'}))
    .build(function (err) {
        if (err) {
        	console.err("Error!")
            throw err;
        }
    });
