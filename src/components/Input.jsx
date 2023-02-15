import React from 'react'
import "./styles.css";

function Input(props) {
    const {todo,handleOnChange} = props;
  return (
    <div>
    <input 
        type="text"
        value={todo}
        placeholder="Enter Todo ..."
        onChange={(e) => handleOnChange(e)}
    /></div>
  )
}

export default Input