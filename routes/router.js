var home = require('../control/home')

exports.router = function(app){
	app.get('/', home.index)
}