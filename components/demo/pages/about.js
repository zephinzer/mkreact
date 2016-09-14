import React, { Component } from 'react';
import Page from '../components/page';

export default class About extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() { }
	componentWillMount() { }
	
	render() {
		return (
			<Page id="about">
				About
			</Page>
		);
	}
};