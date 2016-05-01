import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as TodoActions from './actions';
import TodoApp from './TodoApp';

class App extends Component{
	render(){
		const { todoList, actions } = this.props;
		return (<TodoApp todoList={todoList}
				onAddClick={actions.addTodo}
				onRemoveClick={actions.removeTodo}/>)
	}
}

function mapStateToProps(state){
	return {
		todoList : state
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(TodoActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);