import React, { Component } from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Page from '../components/page';

describe('<Page />', function() {
	sinon.spy(Page.prototype, 'componentDidMount');
	it('mounts successfully', function() {
		const component = mount(<Page />);
		expect(Page.prototype.componentDidMount.calledOnce).to.equal(true);
	});
}); 