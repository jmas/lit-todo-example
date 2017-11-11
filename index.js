import {html, render} from 'lit-html/lib/lit-extended';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import * as todoApp from './todo_app';

const store = createStore(
    todoApp.reducer,
    {
        ...todoApp.reducer.defaultState,
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
