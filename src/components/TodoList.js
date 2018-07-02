import React from 'react';
import Todo from './Todo.js';
import style from './TodoList.css';


const TodoList = ({ todos, remove }) => {
	const task = todos.map(element => {
		return (
			<Todo key={element.id} task={element} remove={remove} />
		);
	})
	return (<ul className={style.todo__list}> {task} </ul>);
}

export default TodoList;