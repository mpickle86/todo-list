import React from "react";

function TodoItem(props) {

  return (
    <div>
      <input type="checkbox"
             checked={props.completed}
             onChange={() => props.handleCheck(props.id)}
             />
      <label>{props.name}</label>
      <button onClick={() => props.handleRemove(props.id, props.completed)}>Remove</button>
    </div>
  )
}

export default TodoItem;