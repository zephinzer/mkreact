var path = require('path'),
	sqlite3 = require('sqlite3');

function ModelTodos(callback) {
	var _this = this;
	this.db = new sqlite3.Database(
		path.join(__dirname, '../data/todos.db'),
		sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
		function(err) {
			//_this.db.run(
			//	'DROP TABLE mkreact_todos',
			//	function(err) {
					_this.db.run(
						'CREATE TABLE mkreact_todos (id INTEGER PRIMARY KEY, label TEXT, description TEXT, dcreated DATETIME)',
						function(err, res) {
							if(!!err) { 
								if(err.errno == 1) { /*console.log('not first access');*/ }
							}
						}
					);
			//	}
			//);
		}
	);
	return this;
};

var ModelTodosSingletonObject = null;
function ModelTodosSingleton(callback) {
	if(!ModelTodosSingletonObject) {
		ModelTodosSingletonObject = new ModelTodos(callback);
	}
	return ModelTodosSingletonObject.db;
};

module.exports = ModelTodosSingleton;