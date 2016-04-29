import Immutable from 'immutable';

export const INITIAL_STATE = Immutable.List.of('잠자기', '밥먹기', '코딩하기');

export function addTodo(state, text){
	return state.push(text);
}

export function removeTodo(state, id){
	return state.delete(id);
}