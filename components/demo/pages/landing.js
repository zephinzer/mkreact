import React, { Component } from 'react';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';

import Page from '../components/page';

export default class Landing extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() { }

	render() {
		return (
			<Page id="landing">
				<div>
					Welcome to mkReact. mkReact is a React App seeder which uses the 
					following frameworks and libraries:
				</div>
				<div>
					<h2>Back-end</h2>
					<h3>Express</h3>
					<h3>SQLite3</h3>
				</div>
				<div>
					<h2>Front-end</h2>
					<h3>React</h3>
					<h3>Redux</h3>
					<h3>Material-UI</h3>
					<h3>Font Awesome</h3>
				</div>
				<div>
					<h2>Tooling</h2>
					<h3>Webpack</h3>
					<h3>WebpackDevMiddleware</h3>
					<h3>Babel</h3>
				</div>
				<div>
					<h2>Testing</h2>
					<h3>Karma</h3>
					<h3>Enzyme</h3>
					<h3>Mocha</h3>
					<h3>Sinon</h3>
					<h3>Chai</h3>
				</div>
			</Page>
		);
	}
};