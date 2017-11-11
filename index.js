import {html, render} from 'lit-html/lib/lit-extended';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import * as todoApp from './todo_app';

const store = createStore(
	todoApp.store,
	{
		...todoApp.store.defaultState,
		todos: [
			{
				text: 'Redux forever',
				done: false,
			},
		],
	},
	applyMiddleware(logger)
);

render(
	html`${ todoApp.container({ store }) }`,
	document.body
);
