import React, { Component } from 'react';

export default class ToolbarFixedContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return(
			<div style={{height:'45px'}}>
				{this.props.children}
			</div>
		)
	}
};