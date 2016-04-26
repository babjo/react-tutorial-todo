import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';

let todoList = [
{id:1, text:'잠자기'}, 
{id:2, text:'밥먹기'},
{id:3, text:'코딩하기'}
];

ReactDOM.render(<TodoApp todoList={todoList}/>, document.getElementById('root'));