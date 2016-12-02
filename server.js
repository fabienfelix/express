// Modules ======================================================================

var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var routes = require('./routes');

var contactModel = require('./models/contact.model');


// App ======================================================================

var app = module.exports = express();

// Middleware ======================================================================

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// after the bodyParser we check req values
app.use(expressValidator());

// configuration ===============================================================

app.set('views', __dirname + '/views');
// app.use(express.static(path.join(__dirname, '/public')));
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));

// routes ======================================================================

// app.enable('trust proxy');


app.get('/', routes.index);

app.get('/partials/:name', routes.partials);

app.get('/api/contacts', contactModel.contacts);
app.get('/api/contacts/:id', contactModel.contact);
app.post('/api/contacts', contactModel.createContact);
app.put('/api/contacts/:id', contactModel.updateContact);
app.delete('/api/contacts/:id', contactModel.destroyContact);

app.get('*', routes.index);

// listen (start app with node server.js) ======================================

app.listen(8080, function(req, res) {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
