var fs = require('fs');
var config = require('../config/config');

exports.SetListener = function (socket) {
	fs.watch(config.fileDir, 
		{persistent: true}, 
		function (event, filename) {
			if (event == 'change') {
				console.info('change::', filename);
				socket.emit('change', {date: 'change'});
			}
		});

	console.log('start reload!');
}