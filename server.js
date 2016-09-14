var config = require('./configurations/server'),
	api = require('./components/api');

var bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	ejs = require('ejs'),
	express = require('express'),
	http = require('http'),
	morgan = require('morgan'),
	path = require('path');

var Server = express();

Server.set('env', config.environment); 
Server.set('views', path.join(__dirname, 'components'));
Server.set('view engine', 'htm');
Server.engine('htm', ejs.renderFile);
Server.use(bodyParser.json());
Server.use(bodyParser.urlencoded({ extended: false }));
Server.use(cookieParser());

if(Server.get('env') != 'production') {
	Server.use(morgan('dev'));
	var webpack = require('webpack');
	/// @see https://github.com/webpack/webpack-dev-middleware
	var webpackDevMiddleware = require('webpack-dev-middleware');
	var webpackConfiguration = require('./webpack.config');
	Server.use(
		webpackDevMiddleware(
			webpack(webpackConfiguration),
			webpackConfiguration.devMiddleware
		)
	);
} else {
	Server.use(morgan('combined'));
	Server.use(
		webpackConfiguration.output.publicPath.concat(
			'/', webpackConfiguration.output.filename
		), 
		function(req, res, next) {
			res.sendFile(path.join(__dirname, '/assets/master.js'));
		}
	);
}

Server.use('/api', api);
Server.use('/assets', express.static(path.join(__dirname, '/assets')));
Server.use('/lib', express.static(path.join(__dirname, '/node_modules')));
Server.use(function(req, res, next) {
	res.render('index');
});

Server.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});
if(Server.get('env') != 'production') {
	Server.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.send(err);
	});
}
Server.use(function(err, req, res, next) {
	res.status(err.status || 500);
	console.error(err);
	res.send(err);
});

http.createServer(Server).listen(process.env.PORT || 4000);