import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import Immutable from 'immutable';

let todoList = Immutable.List.of('잠자기', '밥먹기', '코딩하기');

ReactDOM.render(<TodoApp todoList={todoList}/>, document.getElementById('root'));