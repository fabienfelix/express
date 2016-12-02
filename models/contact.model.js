var database = require('../routes/database');
var mongoose = database.mongoose;

var contactSchema = mongoose.Schema({
    firstname: 'string',
    lastname: 'string',
    email: 'string',
    age: 'number'
});

var Contact = mongoose.model('Contact', contactSchema);

exports.contacts = function(req, res) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('ip = ' + ip);
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
    //validation
    req.checkBody("email", "Enter a valid email address.").isEmail();
    req.checkBody("firstname", "Enter a firstname in upeercase.").isEmail();

    var errors = req.validationErrors();

    if (errors) {
        // console.log(errors);
        res.json(errors[1]);
        return false;
    }

    var contact = new Contact(req.body);
    console.log("contact : " + contact);
    console.log("req.body : " + contact);
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
