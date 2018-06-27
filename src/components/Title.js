import React from 'react';
import style from './Title.css';

const Title = props =>
    <div>
        <h1 className={style.heading}>{props.title}</h1>
        <p className={style.text}>Ilość zadań do wykonania to: {props.numberoftasks}</p>
    </div>

export default Title;