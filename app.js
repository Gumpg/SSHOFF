
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes/router');
var http = require('http');
var path = require('path');
var config = require('./config/config');
var setListener = require('./control/listenerFile');
var socket = require('socket.io');

var app = express();

// all environments
app.set('port', process.env.PORT || config.port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

routes.router(app);


var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
var ios = socket.listen(server).on('connection', function(socket){
	console.log('connection::', socket);
	setListener.SetListener(socket);
});
