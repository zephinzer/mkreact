import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app';
import About from './pages/about';
import Landing from './pages/landing';
import Todos from './pages/todos';
import NoMatch from './pages/no-match';

const Master = () => (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Landing} />
			<Route path="about" component={About} />
			<Route path="todos" component={Todos} />
			<Route path="*" component={NoMatch} />
		</Route>
	</Router>
);

export default Master;