import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
require('moment-timezone');
import request from 'superagent';

import TodoStore, { TodoStoreActions } from './_store';

export default class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deleting: false,
			editing: false,
			expanded: false,
			label: null,
			description: null
		};
		this.cancelEditTodo = this.cancelEditTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.descriptionChanged = this.descriptionChanged.bind(this); 
		this.editTodo = this.editTodo.bind(this);
		this.expandChanged = this.expandChanged.bind(this);
		this.labelChanged = this.labelChanged.bind(this);
		this.saveTodo = this.saveTodo.bind(this);
	}

	componentDidMount() { }

	cancelEditTodo() {
		this.setState({ editing: false });
		this.setState({
			label: null,
			description: null
		});
	}

	deleteTodo() {
		this.setState({ deleting: true });
		let _this = this;
		request
			.del('/api/demo/todos/'.concat(this.props.model.id))
			.send()
			.end(function(err, res) {
				_this.setState({ deleting: false });
				if(!!err) {
					
				} else {
					if(res.body) {
						TodoStore.dispatch(TodoStoreActions.remove(_this.props.index));
						
					} else {
						
					}
					_this.expandChanged();
				}
			});
	}

	descriptionChanged(event, value) {
		this.setState({ description: value });
	}

	editTodo() {
		this.setState({ editing: true });
		this.setState({
			label: this.props.model.label,
			description: this.props.model.description
		});
	}

	expandChanged(event) {
		if(!this.state.saving) {
			let newState = {
				expanded: !this.state.expanded
			}
			if(!!this.state.editing) {
				newState.editing = false;
			}
			this.setState(newState);
		}
	}

	labelChanged(event, value) {
		this.setState({ label: value });
	}

	saveTodo() {
		this.setState({ saving: true });
		let _this = this;
		request
			.put('/api/demo/todos/'.concat(this.props.model.id))
			.send({
				description: this.state.description,
				label: this.state.label
			})
			.end(function(err, res) {
				console.log('edited', res);
				if(!!err) {
					_this.setState({ saving: false });
				} else {
					if(res.body) {
						TodoStore.dispatch(TodoStoreActions.update(
							_this.props.index,
							_this.state.label,
							_this.state.description 
						));
						_this.setState({ editing: false, saving: false });
					} else {
						_this.setState({ saving: false });
					}
				}
			});
	}

	render() {
		if(!!this.props.model) {
			if(!!this.props.model.dcreated) {
				var time = moment(this.props.model.dcreated)
					.format('dddd, DD MMMM YYYY [at] h:mm a');
			}
		}
		
		return (
			<div className="todo-item">
				<Card 
					expandable={true}
					expanded={this.state.expanded}
					onExpandChange={this.expandChanged}
					style={{margin:'16px 0px',paddingTop:'7px'}}>
					<CardTitle showExpandableButton={true}>
						{(() => {
							if(this.state.editing) {
								return(
									<TextField 
										disabled={this.state.saving}
										floatingLabelText="Label for your Todo"
										id="label"
										onChange={this.labelChanged}
										value={this.state.label}
									/>
								);
							} else if(!!this.props.model && !!this.props.model.label) {
								return(
									<h3 style={{margin:'0'}}>{this.props.model.label}</h3>
								);
							} else {
								return(
									<h3 style={{margin:'0'}}>Unnamed Todo</h3>
								);
							}
						})()}
					</CardTitle>
					<CardText expandable={true}>
						{(() => {
							if(this.state.editing) {
								return(
									<TextField 
										disabled={this.state.saving}
										floatingLabelText="Description for your Todo"
										id="description"
										onChange={this.descriptionChanged}
										rowsMax={4}
										multiLine={true}
										value={this.state.description} 
										style={{width:'100%'}} 
									/>
								);
							} else if(!!this.props.model && !!this.props.model.description) {
								return(
									<div>{this.props.model.description}</div>
								);
							} else {
								return(
									<div>No description is available.</div>
								);
							}
						})()}
					</CardText>
					<CardText expandable={true}
						style={{textAlign:'right'}}>
						<small>
							{(() => {
								if(!!time) {
									return(
										{time}
									);
								} else {
									return(
										<i>unknown time</i>
									)
								}
							})()}
						</small>
						{(() => {
							if(this.state.editing) {
								return (
									<div>
										<FlatButton
											disabled={this.state.saving} 
											onClick={this.cancelEditTodo}>
											<FontAwesome name="times" />
										</FlatButton>
										<FlatButton
											disabled={this.state.saving} 
											onClick={this.saveTodo}>
											<FontAwesome name="save" />
										</FlatButton>
									</div>
								);
							} else {
								return(
									<div>
										<FlatButton onClick={this.editTodo}>
											<FontAwesome name="pencil" />
										</FlatButton>
										<FlatButton onClick={this.deleteTodo}>
											<FontAwesome name="trash" />
										</FlatButton>
									</div>
								);
							}
						})()}
					</CardText>
				</Card>
			</div>
		);
	}
};