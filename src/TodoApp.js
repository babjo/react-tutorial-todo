import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoApp extends Component {

	handleClick(){
		console.log('click');
	}

	render(){
		return (<ul>{this.props.todoList.map(function(todo){
					return <TodoItem todo={todo} />
		    	})}</ul>)
	}
};