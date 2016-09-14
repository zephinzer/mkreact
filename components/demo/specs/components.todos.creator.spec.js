import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); 

import TodoCreator from '../components/todos/creator';

describe('<TodoCreator />', function() {
	sinon.spy(TodoCreator.prototype, 'componentDidMount');
	it('mounts successfully', function() {
		const component = mount(<MuiThemeProvider><TodoCreator /></MuiThemeProvider>);
		expect(TodoCreator.prototype.componentDidMount.calledOnce).to.equal(true);
	});
}); 