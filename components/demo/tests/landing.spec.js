import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Landing from '../landing';

describe('<Landing />', function() {
	sinon.spy(Landing.prototype, 'componentDidMount');
	it('calls componentDidMount', function() {
		const component = mount(<Landing />);
		expect(Landing.prototype.componentDidMount.calledOnce).to.be.equal(true);
	});
}); 