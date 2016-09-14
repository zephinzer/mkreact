var express = require('express');
var DemoTodosAPI = express.Router();

var DemoTodosModel = require('../model/todos');
DemoTodosModel();

DemoTodosAPI.post('/', function(req, res, next) {
	console.log(DemoTodosModel());
	var insert = DemoTodosModel().prepare(
		'INSERT INTO mkreact_todos (label, description, dcreated) VALUES (?, ?, datetime("now"));'
	);
	insert.run(
		req.body.label, 
		req.body.description,
		function(err, data, fields) {
			if(!!err) {
				res.json(err);
			} else {
				res.json(insert.lastID);
			}
		}
	);
});

DemoTodosAPI.get('/', function(req, res, next) {
	DemoTodosModel().all('SELECT id, label, description, datetime(dcreated,"localtime") AS dcreated FROM mkreact_todos ORDER BY dcreated DESC', function(err, row) {
		if(!!err) {
			next(err);
		} else {
			if(row === undefined) {
				res.json([]);
			} else {
				res.json(row);
			}
		}
	});
});

DemoTodosAPI.get('/:id', function(req, res, next) {
	var query = DemoTodosModel().prepare(
		'SELECT id, label, description, datetime(dcreated,"localtime") AS dcreated FROM mkreact_todos WHERE id = ?'
	);
	query.get(
		req.params.id,
		function(err, data) {
			if(!!err) {
				res.json(err);
			} else {
				res.json(data);
			}
		}
	);
});

DemoTodosAPI.put('/:id', function(req, res, next) {
	var update = DemoTodosModel().prepare(
		'UPDATE mkreact_todos SET label = ?, description = ? WHERE id = ?'
	);
	update.run(
		req.body.label,
		req.body.description,
		req.params.id,
		function(err, data, fields) {
			if(!!err) {
				res.json(err);
			} else {
				res.json(true);
			}
		}
	);
});

DemoTodosAPI.delete('/:id', function(req, res, next) {
	var remove = DemoTodosModel().prepare(
		'DELETE FROM mkreact_todos WHERE id = ?'
	);
	remove.run(
		req.params.id,
		function(err, data, fields) {
			if(!!err) {
				res.json(err);
			} else {
				res.json(true);
			}
		}
	);
});

module.exports = DemoTodosAPI;