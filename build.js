var metalsmith = require('metalsmith'),
    handlebars = require('handlebars'),
    collections = require('metalsmith-collections'),
    markdown = require('metalsmith-markdown'),
    permalinks = require('metalsmith-permalinks'),
    templates = require('metalsmith-templates'),
    layouts = require('metalsmith-layouts');

metalsmith(__dirname)
    .source('./src')
    .destination('./dest')
    // .use(permalinks({pattern: 'posts/:title'}))
    .use(markdown())
    .use(collections({
        projects: {
            sortBy: 'date',
            reverse: true,
            metadata: {
                foo: 'bar'
            }
        }
    }))
    .use(layouts({
        engine: 'handlebars',
        directory: 'templates'
    }))
    .build(function (err) {
        if (err) {
        	console.err("Error!");
            throw err;
        }
        else {
            console.log("Successful build");
        }
    });

// console.log("Metalsmith object",metalsmith)


