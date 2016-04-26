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
    .use(markdown())
    .use(collections({
        blogposts: { 
            sortBy: 'date',
            reverse: 'true'
        },
        projects: {
            sortBy: 'date',
            reverse: 'false'
        },
        articles: {
            pattern: '*'
        }
    }))
    .use(permalinks())
    .use(layouts({
        engine: 'handlebars',
        directory: 'templates'
    }))
    .build(function (err) {
        if (err) {
            throw err
        }
        else {
            console.log("Successful build");
        }
    });

console.log("Metalsmith object",metalsmith)


