import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import FontAwesome from 'react-fontawesome';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NavigationDrawer from './components/navigation/drawer';
import ToolbarFixedContainer from './components/toolbar-fixed-container';
import ToolbarFixed from './components/toolbar-fixed';

export default class App extends Component {
	constructor(props, context) {
		super(props, context);
	}

	componentDidMount() {} 
	componentWillMount() {}
	render() {
		return (
			<MuiThemeProvider>
				<div id="app">
					<div>
						<ToolbarFixedContainer>
							<ToolbarFixed>
								<ToolbarGroup>
									<ToolbarTitle text="mkReact Demo App" />
								</ToolbarGroup>
								<ToolbarGroup>
									<NavigationDrawer />
								</ToolbarGroup>
							</ToolbarFixed>
						</ToolbarFixedContainer>
					</div>
					<ReactCSSTransitionGroup
						component="Page"
						transitionName="example"
						transitionEnterTimeout={300}
						transitionLeaveTimeout={300}>
						{React.cloneElement(
							this.props.children, {
								key: location.pathname
							}
						)}
					</ReactCSSTransitionGroup>
				</div>
			</MuiThemeProvider>
		);
	}
};