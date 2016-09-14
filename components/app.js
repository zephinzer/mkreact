import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Master from './demo';

injectTapEventPlugin();

render(
	<Master />,
	document.getElementById('mkreact-app')
);