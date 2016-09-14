import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import NoMatch from '../pages/no-match';

describe('<NoMatch />', function() {
	sinon.spy(NoMatch.prototype, 'componentDidMount');
	it('mounts successfully', function() {
		const component = mount(<NoMatch />);
		expect(NoMatch.prototype.componentDidMount.calledOnce).to.be.equal(true);
	});
}); 