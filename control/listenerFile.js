var fs = require('fs');
var config = require('../config/config');

exports.SetListener = function () {
	fs.watch(config.fileDir, 
		{persistent: true}, 
		function (event, filename) {
			if (event == 'change') {
				config.socket.emit('change', {date: 'change', reloadUrl : config.lisentStation});
			}
		});

	console.log('start reload!');
}