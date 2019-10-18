import React, {useState, useEffect} from 'react';
import './App.css';
import InputBox from "./InputBox";
import TodoItemsList from "./TodoItemsList";

function App() {
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
    <div className="App">
      <InputBox handleChange={handleChange}
                handleSubmit={handleSubmit}
                todoItem={todoItem}/>
      <TodoItemsList todoItemsArray={todoItemsArray}/>
      {/*<CompletedList />*/}
    </div>  
  );
}

export default App;
