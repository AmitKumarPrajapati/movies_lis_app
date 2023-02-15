import React from 'react'
import "./styles.css";

function TodoItem(props) {
    const { todo, index } =props;
  return (
    <p className='todo-para'>{`${index+1}. ${todo}`}</p>
  )
}

export default TodoItem