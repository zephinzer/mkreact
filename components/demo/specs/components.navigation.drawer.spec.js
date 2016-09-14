import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import App from '../app';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import NavigationDrawer from '../components/navigation/drawer';

describe('<NavigationDrawer />', function() {
	sinon.spy(NavigationDrawer.prototype, 'componentDidMount');

	it('mounts successfully', function() {
		const component = mount(<MuiThemeProvider><NavigationDrawer /></MuiThemeProvider>);
		expect(NavigationDrawer.prototype.componentDidMount.calledOnce).to.equal(true);
	});

	it('contains links to all pages', function() {
		const component = mount(<MuiThemeProvider><NavigationDrawer /></MuiThemeProvider>);
		const links = component.find('Link');
		const definedPaths = [
			'/',
			'/about',
			'/todos'
		];
		links.forEach(function(link) {
			definedPaths.forEach(function(path) {
				if(path === link) {
					console.log('yes'); 
				}
			});
		}); 
	});
});  