import React from "react";

function TodoItem(props) {

  return (
    <div>
      <input type="checkbox"
             checked={props.completed}
             onChange={() => props.handleCheck(props.id)}
             />
      <label>{props.name}</label>
    </div>
  )
}

export default TodoItem;