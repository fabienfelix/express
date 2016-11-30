// https://github.com/expressjs/express/wiki/Migrating-from-3.x-to-4.x

// set up ======================================================================
var express = require('express');
var routes = require('./routes');
var api = require('./routes/api');

var app = module.exports = express(); // create our app w/ express

// configuration ===============================================================

// app.set('views', __dirname + '/views');
// app.set('view engine', 'jade');

app.set('views', __dirname + '/views');

// app.engine('html', consolidate.handlebars);
// app.set('view engine', 'html');

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');
// app.use(express.static(path.join(__dirname, '/public')));
app.engine('html', require('ejs').renderFile);


app.use(express.static(__dirname + '/public'));


// routes ======================================================================

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

app.get('/api/contacts', api.contacts);
app.get('/api/contacts/:id', api.contact);
app.post('/api/contacts', api.createContact);
app.put('/api/contacts/:id', api.updateContact);
app.delete('/api/contacts/:id', api.destroyContact);

app.get('*', routes.index);

// app.get('*', routes.index);





// listen (start app with node server.js) ======================================

app.listen(8080, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
