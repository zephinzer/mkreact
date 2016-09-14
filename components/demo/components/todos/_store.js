import { createStore } from 'redux';
import { ACTION, addTodo, deleteTodo, loadTodos, toggleTodo, updateTodo } from './_actions';
import request from 'superagent';
import moment from 'moment';

let reducer = function(state, action) {
	switch(action.type) {
		case ACTION.ADD:
			var newState = {
				todos: [{
					id: action.id,
					label: action.label,
					description: action.description,
					dcreated: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
				}].concat(state.todos)
			};
			return newState;
		case ACTION.DELETE:
			var newState = [].concat(state.todos);
			newState.splice(action.index, 1);
			return {
				todos: newState
			};
		case ACTION.LOAD:
			var newState = [].concat(action.todos);
			
			return Object.assign({}, state, {
				todos: newState
			});
		case ACTION.TOGGLE:
			var newState = Object.assign({}, state);
			newState.todos[action.index].completed = true;
			return newState;
		case ACTION.UPDATE:
			newState = Object.assign({}, state);
			newState.todos[action.index].label = action.label;
			newState.todos[action.index].description = action.description;
			return newState;
	}
};

let initialState = {
	todos: []
}

let TodoStore = createStore(reducer, initialState);
export default TodoStore;

export const TodoStoreActions  = {
	create: addTodo,
	load: loadTodos,
	remove: deleteTodo,
	update: updateTodo,
	toggle: toggleTodo,
};