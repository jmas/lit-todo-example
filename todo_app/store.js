import * as actionTypes from './action_types';

export const defaultState = {
    todos: [],
    editing: null,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        done: false,
                    },
                ]
            };
        case actionTypes.TOGGLE_DONE:
            return {
                ...state,
                todos: state.todos.map(item => (
                    item === action.item
                        ?
                            {
                                ...item,
                                done: action.done===null ? !item.done: action.done,
                            }
                        : item
                )),
            };
        case actionTypes.EDIT_TODO:
            return {
                ...state,
                editing: action.item,
            };
        case actionTypes.SAVE_TODO:
            return {
                ...state,
                editing: null,
                todos: state.todos.map(item => (
                    item === action.item
                        ? {
                            ...item,
                            text: action.text,
                        }
                        : item
                )),
            };
        case actionTypes.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(item => item !== action.item),
            };
        default:
            return state;
    }
};
