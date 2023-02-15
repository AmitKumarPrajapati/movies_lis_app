import React from 'react'
import "./styles.css";
import TodoItem from './TodoItem'

function TodoList(props) {
    const { todos } = props;
  return (
    <div className='todo-list-box'>
    <p>Your Todo List</p>
        { todos?.map((todo, index) => <TodoItem todo={todo} index={index}/>) }
    </div>
  )
}

export default TodoList