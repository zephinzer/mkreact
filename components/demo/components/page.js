import React, { Component } from 'react';

export default class Page extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() { }
	render() {
		return (
			<div className="page">
				{this.props.children}
			</div>
		)
	}
};