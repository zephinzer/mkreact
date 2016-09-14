import React, { Component } from 'react';

export default class Page extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() { }

	render() {
		return (
			<div className="page">
				{this.props.children}
			</div>
		)
	}
};