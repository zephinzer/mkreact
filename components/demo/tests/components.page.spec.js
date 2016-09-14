import React, { Component } from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Page from '../components/page';

describe('<Page />', function() {
	sinon.spy(Page.prototype, 'componentWillMount');
	it('calls componentWillMount', function() {
		const component = shallow(<Page />);
		expect(NavigationDrawer.prototype.componentWillMount.calledOnce).to.equal(true);
	});
}); 