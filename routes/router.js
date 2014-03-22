var home = require('../control/home');
var setListener = require('../control/listenerFile');

exports.router = function(app){
	app.get('/', home.index);
	app.get('/startreload', setListener.SetListener);
	app.get('/listenfile', home.listenfile);
	app.get('/setting', home.setting);
	app.post('/setpath', home.setpath);
}