import React, { Component } from 'react';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontAwesome from 'react-fontawesome';

class NavigationDrawer extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			open: false
		};
		this.revealMenu = this.revealMenu.bind(this);
	}

	componentDidMount() {}
	componentWillMount() {}

	revealMenu() {
		this.setState({ open: !this.state.open });
	}

	render() {
		var data = [
			{
				linkTo: '/',
				fontAwesomeIcon: 'home',
				label: 'Home'
			},
			{
				linkTo: '/todos',
				fontAwesomeIcon: 'check',
				label: 'Todos'
			},
			{
				linkTo: '/about',
				fontAwesomeIcon: 'info',
				label: 'About'
			}
		];
		var self = this;
		return (
			<div>
				<IconButton iconClassName="fa fa-bars"
					onClick={this.revealMenu} />
				<Drawer
					docked={false} 
					onRequestChange={this.revealMenu}
					open={this.state.open}
					zIndex={1000}>
					<div className="header">
						<h2>
							mkReact
						</h2>
					</div>
					{data.map(function(result) {
						return(
							<div key={result.label}>
								<Link to={result.linkTo}
									onClick={self.revealMenu}
									style={{textDecoration:'none'}}>
									<MenuItem>
										<div className="inline-block content center"
											style={{ width: '2em'}}>
											<FontAwesome name={result.fontAwesomeIcon} />
										</div>
										{result.label}
									</MenuItem>
								</Link>
							</div>
						);
					})}
				</Drawer>
			</div>
		);
	}
};

export default NavigationDrawer;