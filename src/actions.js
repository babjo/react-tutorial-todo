export const ADD_TODO = "ADD_TODO";

export function addTodo(text){
	return {type : ADD_TODO, text: text};
}

export const REMOVE_TODO = "REMOVE_TODO";

export function removeTodo(id){
	return {type : REMOVE_TODO, id: id};
}