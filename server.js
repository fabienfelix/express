// set up ======================================================================
var express = require('express');
var mongoose = require('mongoose'); // mongoose for mongodb

var app = express(); // create our app w/ express

// Mongoose ===============================================================

mongoose.Promise = global.Promise;	// Use native Node promises
mongoose.connect('mongodb://localhost/angularjs')	// connect to MongoDB
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

// configuration ===============================================================

app.use(express.static('app'));// set the static files location /public/img will be /img for users
// app.use(express.logger('dev')); // log every request to the console
// app.use(express.bodyParser()); // pull information from html in POST


// routes ======================================================================
require('./app/js/route/app.route.js')(app);

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port " + 8080);
