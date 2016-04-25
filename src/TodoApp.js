import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoApp extends Component {
  render(){
    return (<ul>{this.props.todoList.map(function(todoText){
    			return <TodoItem text={todoText} />
	    	})}</ul>)
  }
};