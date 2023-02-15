import React, { useState } from "react";
import "./styles.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

/** App Component */
function App() {
  const [ todo, setTodo ] = useState("");
  const [todos, setTodos ] = useState([]);
  
  const handleButtonClick = () => {
    const singleTodo =  todo;
    setTodos([...todos, singleTodo])
    setTodo("")
  }

  const handleOnChange = (event) => {
    setTodo(event.target.value)
  }

  const handleResetBtn = () => {
    setTodos([])
  }
  return (
      <div className="main-box">
        <div className="combined-box">
          <div className="input-box">
            <Input handleOnChange={handleOnChange} todo={todo} />
          </div>
          <div className="button-box">
            <button type='button' onClick={handleButtonClick}>Add Todo</button>
            <button type="button" onClick={handleResetBtn}>Reset List</button>
          </div>
        </div>
        <div className="todo-list">
          <TodoList todos={todos} />
        </div>
      </div>
  );
}

export default App;
