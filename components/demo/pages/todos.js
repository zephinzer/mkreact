import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';
import request from 'superagent';

import Page from '../components/page';
import TodoItem from '../components/todos/item';
import TodoCreator from '../components/todos/creator';
import TodoList from '../components/todos/list';
import TodoStore, { TodoStoreActions } from '../components/todos/_store';

export default class Todos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
		this.unsubscribe = null;
	}

	componentDidMount() {
		console.log('componentDidMount');
		var _this = this;
		this.unsubscribe = TodoStore.subscribe(() => {
			var state = TodoStore.getState();
			console.log(state);
			_this.setState({
				todos: [].concat(state.todos)
			});
		});
		request.get('/api/demo/todos')
			.end(function(err, res) {
				console.log(arguments);
				if(!err) {
					TodoStore.dispatch(TodoStoreActions.load(
						res.body
					));
				}
			});
	}

	componentWillMount() {
		var _this = this;
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
		if(!!this.unsubscribe) {
			this.unsubscribe();
		}
		this.unsubscribe = null;
	}

	render() {
		return(
			<Page id="todos">
				<br />
				<Card>
					<CardText>
						<p>
							This is a sample component demonstrating standard
							CRUD operations performed using Redux.
						</p>
					</CardText>
				</Card>
				<TodoCreator />
				<TodoList todos={this.state.todos} />
			</Page>
		)
	}
};