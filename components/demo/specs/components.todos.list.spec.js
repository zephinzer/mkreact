import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); 

import TodoList from '../components/todos/list';

describe('<TodoList />', function() {
	sinon.spy(TodoList.prototype, 'componentDidMount');
	it('mounts successfully', function() {
		const component = mount(<MuiThemeProvider><TodoList todos={[]} /></MuiThemeProvider>);
		expect(TodoList.prototype.componentDidMount.calledOnce).to.equal(true);
	});
	it('lists all todos specified in the `todos` prop using <TodoItem />', function() {
		const component = mount(
			<MuiThemeProvider>
				<TodoList todos={[{ id:1, label:'1', description:'1' },
					{ id:2, label:'2', description:'2' },
					{ id:3, label:'3', description:'3' },
					{ id:4, label:'4', description:'4' }]} 
				/>
			</MuiThemeProvider>
		);
		expect(component.find('TodoItem').length).to.equal(4);
	});
}); 