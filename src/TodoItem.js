import React from "react";

function TodoItem(props) {

  return (
    <div>
      <input type="checkbox"/>
      <label>{props.name}</label>
    </div>
  )
}

export default TodoItem;