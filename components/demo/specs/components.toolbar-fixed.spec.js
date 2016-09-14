import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import ToolbarFixed from '../components/toolbar-fixed';

describe('<ToolbarFixed />', function() {
	sinon.spy(ToolbarFixed.prototype, 'componentDidMount');
	it('mounts successfully', function() {
		const component = mount(<MuiThemeProvider><ToolbarFixed /></MuiThemeProvider>);
		expect(ToolbarFixed.prototype.componentDidMount.calledOnce).to.equal(true);
	});
	it('contains children', function() {
		const component = mount(<MuiThemeProvider><ToolbarFixed><div id="content">Hello</div></ToolbarFixed></MuiThemeProvider>);
		expect(component.find('div#content').length).to.equal(1);
	});
}); 