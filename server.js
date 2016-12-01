// set up ======================================================================

var bodyParser = require('body-parser');
var express = require('express');

var routes = require('./routes');

var api = require('./routes/api');

var app = module.exports = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


// configuration ===============================================================

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

// listen (start app with node server.js) ======================================

app.listen(8080, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
