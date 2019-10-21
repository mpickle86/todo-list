import React from "react";

function InputBox(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text"
             name="inputBox"
             value={props.todoItem.name}
             placeholder="New Todo Item"
             onChange={props.handleChange} />
      <button>Add</button>
    </form>
  );
}

export default InputBox;