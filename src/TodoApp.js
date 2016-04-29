import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Immutable from 'immutable';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import store from './store';
import {addTodo, removeTodo} from './actions';
import {INITIAL_STATE} from './core';

export default class TodoApp extends Component {

	constructor(props){
		super(props);
		this.state = { value : '', todoList : INITIAL_STATE };
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

		let component = this;
		store.subscribe(() => {
			component.setState({todoList: store.getState()});
		});
	}

	handleClick(id){
		store.dispatch(removeTodo(id));
	}

	handleChange(e){
		this.setState({value: e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		store.dispatch(addTodo(this.state.value));
		this.setState({value: ''});
	}

	render(){
		var todos = this.state.todoList.map(function(todo, i){
					let boundClick= this.handleClick.bind(this, i);
					return (<TodoItem todo={todo} key={i} onClick={boundClick}/>);
		    	}, this);
		return (<div>
			<ul>
				<ReactCSSTransitionGroup transitionName="example"  transitionEnterTimeout={500} transitionLeaveTimeout={300}>
					{todos}
				</ReactCSSTransitionGroup>
			</ul>
			<ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
				<input type="submit" value="추가"/>
			</form>
			</ReactCSSTransitionGroup>
			</div>)
	}
};