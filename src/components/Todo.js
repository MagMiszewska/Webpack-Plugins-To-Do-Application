import React from 'react';
import style from './Todo.css';

const Todo = ({task, remove}) => (
	<li className={style.todo__item}> 
		{task.text}
		<button className={style.todo__button} onClick={() => remove(task.id)}> X </button>
	</li> 
);

export default Todo;