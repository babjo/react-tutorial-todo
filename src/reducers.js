import Immutable from 'immutable';
import {ADD_TODO, REMOVE_TODO} from './actions'

import {INITIAL_STATE, addTodo, removeTodo} from './core';

function todoApp(state = INITIAL_STATE, action){
	switch(action.type){
		case ADD_TODO:
			return addTodo(state, action.text);
		case REMOVE_TODO:
			return removeTodo(state, action.id);
		default:
			return state;
	}
}

export default todoApp;