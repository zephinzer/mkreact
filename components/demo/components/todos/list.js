import React, { Component } from 'react';
import { createStore } from 'redux';
import TodoItem from './item';
import TodoStore from './_store';

export default class TodoList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="todo-list">
				{this.props.todos.map(function(item, index) {
					return (
						<TodoItem model={item} index={index} key={index} />
					)
				})}
			</div>
		)
	}
};