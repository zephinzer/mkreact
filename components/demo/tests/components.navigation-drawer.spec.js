import React, { Component } from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import App from '../app';
import NavigationDrawer from '../components/navigation-drawer';

describe('<NavigationDrawer />', function() {
	sinon.spy(NavigationDrawer.prototype, 'componentWillMount');
	sinon.spy(NavigationDrawer.prototype, 'componentDidMount');

	it('calls componentWillMount', function() {
		const component = shallow(<NavigationDrawer />);
		expect(NavigationDrawer.prototype.componentWillMount.calledOnce).to.equal(true);
	});

	it('contains links to all pages', function() {
		const component = shallow(<NavigationDrawer />);
		const links = component.find('Link');
		const definedPaths = [
			'/',
			'/about'
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