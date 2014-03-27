var fs = require('fs');
var config = require('../config/config');
var findAllDir = require('../utils/getAlldir');

exports.SetListener = function () {
	var filenameList = findAllDir.findAll(config.fileDir);
	for (var index = filenameList.length; index--;){
		setToFile(filenameList[index]);
	}
	console.log('start reload!');
}

function setToFile(fileDir){
	fs.watch(fileDir, 
		{persistent: true}, 
		function () {
			config.socket.emit('change', {date: 'change', reloadUrl : config.lisentStation});
	});
}

