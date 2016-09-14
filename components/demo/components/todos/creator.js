import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import request from 'superagent';

import TodoStore, { TodoStoreActions } from './_store';

export default class TodoCreator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: null,
			label: '',
			description: ''
		};
		this.createTodo = this.createTodo.bind(this);
		this.onDescriptionChange = this.onDescriptionChange.bind(this);
		this.onLabelChange = this.onLabelChange.bind(this);
	}

	createTodo() {
		console.log('createTodo() called for following data:', this.state);
		var _this = this;
		request
			.post('/api/demo/todos')
			.send(this.state)
			.end(function(err, res) {
				if(!!err) {

				} else {
					_this.state.id = parseInt(res.body);
					TodoStore.dispatch(TodoStoreActions.create(
						_this.state.id,
						_this.state.label,
						_this.state.description
					));
					_this.setState({
						id: null,
						label: '',
						description: ''
					});
				}
			});
	}

	onDescriptionChange(event, value) {
		this.setState({ description: value });
	}

	onLabelChange(event, value) {
		this.setState({ label: value });
	}

	render() {
		return(
			<div>
				<TextField
					floatingLabelText="Label for your Todo"
					onChange={this.onLabelChange}
					style={{width:'100%'}}
					value={this.state.label}
				/>
				<TextField
					floatingLabelText="Description for your Todo"
					multiLine={true}
					onChange={this.onDescriptionChange}
					rowsMax={4}
					style={{marginTop:'-16px',width:'100%'}}
					value={this.state.description}
				/>
				<RaisedButton
					onClick={this.createTodo}
					style={{width:'100%'}}>
					Submit
				</RaisedButton>
			</div>
		);
	}
};