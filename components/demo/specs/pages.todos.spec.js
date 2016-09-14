import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Todos from '../pages/todos';

describe('<Todos />', function() {
	sinon.spy(Todos.prototype, 'componentDidMount');
	it('mounts successfully', function() {
		const component = mount(<MuiThemeProvider><Todos /></MuiThemeProvider>);
		expect(Todos.prototype.componentDidMount.calledOnce).to.equal(true);
	});
}); 