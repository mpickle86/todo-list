import React from "react";

function CompletedItem(props) {
  return (
    <div>
      <input type="checkbox"
             checked={props.completed}
             onChange={() => props.handleUncheck(props.id)}
             />
      <label>{props.name}</label>
      <button onClick={() => props.handleRemove(props.id, props.completed)}>Remove</button>
    </div>
  )
}

export default CompletedItem;