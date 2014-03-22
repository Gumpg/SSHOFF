var config = require('../config/config');
exports.index = function(req, res){
	res.render('home');
};


exports.listenfile = function (req, res) {
	if (config.isChange) {
		res.send('change');
		config.isChange = false;
	} else {
		res.send('no');
	}
}