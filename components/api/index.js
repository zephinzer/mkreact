var express = require('express');
var API = express.Router();

API.use('/demo', require('../demo/controllers'));

API.get('/', function(req, res, next) {
	res.send('todo');
});

module.exports = API;