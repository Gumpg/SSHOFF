var fs = require('fs');
var config = require('../config/config');

exports.SetListener = function (req, res) {
	fs.watch(config.fileDir, 
		{persistent: true}, 
		function (event, filename) {
			if (event == 'change') {
				console.info('change::', filename);
			}
			console.log('see it ', event, filename);
			config.isChange = true;
		});

	res.send('start reload!');
}