var express = require('express');
var DemoAPI = express.Router();

DemoAPI.use('/todos', require('./todos'));
DemoAPI.use('/', function(req, res, next) {
	res.json('todo');
});

module.exports = DemoAPI;