import React from "react";

function InputBox(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text"
             name="name"
             id="nameInput"
             value={props.todoItem.name}
             placeholder="New Todo Item"
             onChange={props.handleChange}
      />
      <select name="urgency"
              id="urgencyInput"
              value={props.todoItem.urgency}
              onChange={props.handleChange}>
        <option>-Urgency Level-</option>
        <option value="1">1 - Most Urgent</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5 - Least Urgent</option>        
      </select>
      <input type="submit" value="Add" />
    </form>
  );
}

export default InputBox;