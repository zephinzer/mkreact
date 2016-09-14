import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import About from '../pages/about';

describe('<About />', function() {
	sinon.spy(About.prototype, 'componentDidMount');
	it('mounts successfully', function() {
		const component = mount(<About />);
		expect(About.prototype.componentDidMount.calledOnce).to.equal(true);
	});
}); 