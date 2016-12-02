exports.index = function(req, res) {
    res.render('layout.html');
};

exports.partials = function(req, res) {
    var name = req.params.name;
    res.render('partials/' + name + '.html');
};
