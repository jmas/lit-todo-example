import {html, render} from 'lit-html/lib/lit-extended';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import todoApp from './todo_app';

const store = createStore(
    todoApp.reducer,
    {
        ...todoApp.reducer.defaultState,
        todos: [
            {
                text: 'Use Redux',
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
