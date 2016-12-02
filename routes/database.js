var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Use native Node promises
mongoose.connect('mongodb://localhost/express') // connect to MongoDB
    .then(() => console.log('connection database succesful'))
    .catch((err) => console.error(err));

exports.mongoose = mongoose;