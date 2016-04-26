
var metalsmith = require('metalsmith'),
    handlebars = require('handlebars'),
    collections = require('metalsmith-collections'),
    markdown = require('metalsmith-markdown'),
    permalinks = require('metalsmith-permalinks'),
    templates = require('metalsmith-templates'),
    layouts = require('metalsmith-layouts'),
    fs = require('fs');

handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbt').toString());
handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbt').toString());

metalsmith(__dirname)
    .source('./src')
    .destination('./dest')
    .use(markdown())
    .use(collections({
        articles: {
            pattern: 'content/*/*.*',
            sortBy: 'date',
            reverse: 'true'
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


