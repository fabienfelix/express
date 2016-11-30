// module.exports = function(app) {
//     require('./app.route.js')(app);

// require('./user.route.js')(app);
// app.get('/view2', function(req, res) {
//     res.sendFile('view2.html', { root: __dirname+ '/../../html' });
// });

// };

exports.index = function(req, res) {
    // res.sendFile('layout.html', { root: __dirname + '/../views' });
    // res.render('layout');
    res.render('layout.html');
};

exports.partials = function(req, res) {
    var name = req.params.name;
    // res.sendFile(name + '.html', { root: __dirname + '/../views/partials' });
    // res.render('partials/' + name);
    res.render('partials/' + name + '.html');
};
