//need to declare every plugin we use from metalsmith
var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');

//call metalsmith, define metadata
metalsmith(__dirname).metadata({
    site: {
        name: '46makun',
        description: "Cool site is cool."
}
})
.source('./src')
.destination('./public')
//to add markdown to workflow (below).
//order of plugins is important.
//works like a pipeline
.use(markdown())
.build(function (err) {
if (err) {
console.log(err);
}
else {
console.log('46makun built');
}
});