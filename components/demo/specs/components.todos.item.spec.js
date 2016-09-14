import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); 

import TodoItem from '../components/todos/item';

describe('<TodoItem />', function() {
	sinon.spy(TodoItem.prototype, 'componentDidMount');
	it('mounts successfully', function() {
		const component = mount(<MuiThemeProvider><TodoItem /></MuiThemeProvider>);
		expect(TodoItem.prototype.componentDidMount.calledOnce).to.equal(true);
	});
	it('accepts a `model` prop containing a `label` property', function() {
		const component = mount(<MuiThemeProvider><TodoItem model={{label:'l',description:'d',dcreated:'2016-09-14 16:13:00'}} /></MuiThemeProvider>);
		expect(component.props().children.props.model.label).to.equal('l');
	});
	it('accepts a `model` prop containing a `description` property', function() {
		const component = mount(<MuiThemeProvider><TodoItem model={{label:'l',description:'d',dcreated:'2016-09-14 16:13:00'}} /></MuiThemeProvider>);
		expect(component.props().children.props.model.description).to.equal('d');
	});
	it('accepts a `model` prop containing a `dcreated` property', function() {
		const component = mount(<MuiThemeProvider><TodoItem model={{label:'l',description:'d',dcreated:'2016-09-14 16:13:00'}} /></MuiThemeProvider>);
		expect(component.props().children.props.model.dcreated).to.equal('2016-09-14 16:13:00');
	});
}); 