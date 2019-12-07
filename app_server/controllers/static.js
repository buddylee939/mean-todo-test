module.exports.index = function(req, res) {
  res.render('index', { title: 'Home' });
};

module.exports.about = function(req, res) {
  res.render('about', { title: 'About' });
};

module.exports.contact = function(req, res) {
  res.render('contact', { title: 'Contact' });
};