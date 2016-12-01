// Mongoose ===============================================================

var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Use native Node promises
mongoose.connect('mongodb://localhost/express') // connect to MongoDB
    .then(() => console.log('connection database succesful'))
    .catch((err) => console.error(err));


var contactSchema = mongoose.Schema({ 
  firstname: 'string', 
  lastname: 'string', 
  age: 'number' 
});

var Contact = mongoose.model('Contact', contactSchema);

exports.contacts = function(req, res) {
  Contact.find({}, function(err, obj) {
    res.json(obj)
  });
};

exports.contact = function(req, res) {
  Contact.findOne({ _id: req.params.id }, function(err, obj) {
    res.json(obj);
  });
};

exports.createContact = function(req, res) {
  var contact = new Contact(req.body);
  console.log("contact : "+contact);
  console.log("req.body : "+contact);
  contact.save();
  res.json(req.body);
};

exports.updateContact = function(req, res) {
  Contact.findByIdAndUpdate(req.params.id, {
    $set: { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age }
  }, { upsert: true },
  function(err, obj) {
    return res.json(true);
  });
};

exports.destroyContact = function(req, res) {
  Contact.remove({ _id: req.params.id }, function(err) {
    res.json(true);
  });
};