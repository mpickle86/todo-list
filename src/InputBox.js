import React, {useState, useEffect} from "react";

function InputBox() {
  const [todoItem, setTodoItem] = useState("");
  
  //initializes todoItemsArray from localStorage
  const initialArrayString = localStorage.getItem("todoItemsArray");
  const initialArray = JSON.parse(initialArrayString);
  const [todoItemsArray, setTodoItemsArray] = useState(initialArray || []); 

  function handleChange(event) {
    setTodoItem(event.target.value);
  }

  //adds new item to todoItemsArray in state
  function handleSubmit(event) {
    setTodoItemsArray(prevArray => prevArray.concat(todoItem));
    setTodoItem("");
    event.preventDefault();
  }

  //stores todoItemsArray in localStorage when new item is submitted
  useEffect(() => {
    localStorage.setItem("todoItemsArray", JSON.stringify(todoItemsArray));
  }, [todoItemsArray]);
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
             name="inputBox"
             value={todoItem}
             placeholder="New Todo Item"
             onChange={handleChange} />
      <button>Add</button>
    </form>
  );
}

export default InputBox;