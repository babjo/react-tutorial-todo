import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Immutable from 'immutable';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class TodoApp extends Component {

	constructor(props){
		super(props);
		this.state = { value : '', todoList : props.todoList };
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	handleClick(id){
		this.removeTodo(id);
	}

	handleChange(e){
		this.setState({value: e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		this.addTodo(this.state.value);
		this.setState({value: ''});
	}

	addTodo(text){
		this.setState({todoList: this.state.todoList.push(text)});
	}

	removeTodo(id){
		this.setState({todoList: this.state.todoList.delete(id)});
	}

	render(){
		return (<div>
			<ul>{this.state.todoList.map(function(todo, i){
					let boundClick= this.handleClick.bind(this, i);
					return <TodoItem todo={todo} key={i} onClick={boundClick}/>
		    	}, this)}</ul>
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
				<input type="submit" value="추가"/>
			</form>
			</div>)
	}
};