var config = require('../config/config');


exports.index = function(req, res){
	res.render('home');
};


exports.listenfile = function(req, res) {
	if (config.isChange) {
		res.send('change');
		config.isChange = false;
	} else {
		res.send('no');
	}
}

exports.setting = function(req, res) {
	res.render('setting');
}

exports.setpath = function(req, res) {
	console.log(req.body);
	config.fileDir = req.body.path;
	res.send('ok');
}