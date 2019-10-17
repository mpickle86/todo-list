import React, {useState} from "react";

function InputBox() {
  const [todoItem, setTodoItem] = useState("");


  function handleChange(event) {
    setTodoItem(event.target.value);
  }
  
  return <input type="text"
                name="inputBox"
                value={todoItem.value}
                placeholder="New Todo Item"
                onChange={handleChange} />
}

export default InputBox;