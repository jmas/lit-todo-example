import * as actionTypes from './action_types';

export default {
    add(text) {
        return {
            type: actionTypes.ADD_TODO,
            text,
        };
    },
    toggleDone(item, done=null) {
        return {
            type: actionTypes.TOGGLE_DONE,
            item,
            done,
        };
    },
    edit(item) {
        return {
            type: actionTypes.EDIT_TODO,
            item,
        };
    },
    save(item, text) {
        return {
            type: actionTypes.SAVE_TODO,
            item,
            text,
        };
    },
    delete(item) {
        return {
            type: actionTypes.DELETE_TODO,
            item,
        };
    },
};
