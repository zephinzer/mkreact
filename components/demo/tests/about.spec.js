import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import About from '../about';

describe('<About />', function() {
	sinon.spy(About.prototype, 'componentDidMount');
	it('calls componentDidMount', function() {
		const component = mount(<About />);
		expect(About.prototype.componentDidMount.calledOnce).to.equal(true);
	});
}); 