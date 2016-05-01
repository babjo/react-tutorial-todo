import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import TodoItem from './TodoItem';
import Immutable from 'immutable';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import store from './store';

export default class TodoApp extends Component {

	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	handleClick(id){
		this.props.onRemoveClick(id);
	}

	handleSubmit(e){
		e.preventDefault();
		const node = findDOMNode(this.refs.input);
		const text = node.value.trim();
		this.props.onAddClick(text);
		node.value = '';
	}

	render(){
		var todos = this.props.todoList.map(function(todo, i){
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
			<form onSubmit={e => this.handleSubmit(e)}>
				<input ref='input' type="text"/>
				<input type="submit" value="추가"/>
			</form>
			</ReactCSSTransitionGroup>
			</div>)
	}
};