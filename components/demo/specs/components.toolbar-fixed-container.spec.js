import React, { Component } from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import ToolbarFixedContainer from '../components/toolbar-fixed-container';

describe('<ToolbarFixedContainer />', function() {
	sinon.spy(ToolbarFixedContainer.prototype, 'componentDidMount');
	it('mounts successfully', function() {
		const component = mount(<ToolbarFixedContainer />);
		expect(ToolbarFixedContainer.prototype.componentDidMount.calledOnce).to.equal(true);
	});
	it('contains children', function() {
		const component = mount(<ToolbarFixedContainer><div id="content">Hello</div></ToolbarFixedContainer>);
		expect(component.find('div#content').length).to.equal(1);
	});
}); 