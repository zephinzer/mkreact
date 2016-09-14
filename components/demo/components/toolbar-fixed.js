import React, { Component } from 'react';
import Toolbar from 'material-ui/Toolbar';

export default class ToolbarFixed extends Component {
	render() {
		return(
			<Toolbar style={{position:'fixed',width:'100%',zIndex:'100'}}>
				{this.props.children}
			</Toolbar>
		)
	}
};