import React, {useState, useEffect} from 'react';
import './App.css';
import InputBox from "./InputBox";
import TodoItemsList from "./TodoItemsList";

function App() {
  const [todoItem, setTodoItem] = useState({
                                    name: "",
                                    completed: false
                                  });

  //initializes todoItemsArray from localStorage
  const initialArrayString = localStorage.getItem("todoItemsArray");
  const initialArray = JSON.parse(initialArrayString);
  const [todoItemsArray, setTodoItemsArray] = useState(initialArray || []); 

  function handleChange(event) {
    setTodoItem({
      name: event.target.value,
      completed: false
    });
  }

  //adds new item to todoItemsArray in state
  function handleSubmit(event) {
    setTodoItemsArray(prevArray => prevArray.concat(todoItem));
    setTodoItem({
      name: "",
      completed: false
    });
    event.preventDefault();
  }

  //toggles "completed" property when checkbox is checked
  function handleCheck(id) {
    setTodoItemsArray(prevArray => prevArray.map(item => {
      if (prevArray.indexOf(item) === id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    }))
  }

  //stores todoItemsArray in localStorage when new item is submitted
  useEffect(() => {
    localStorage.setItem("todoItemsArray", JSON.stringify(todoItemsArray));
  }, [todoItemsArray]);
  
  return (
    <div className="App">
      <InputBox handleChange={handleChange}
                handleSubmit={handleSubmit}
                todoItem={todoItem}
                />
      <TodoItemsList todoItemsArray={todoItemsArray}
                     handleCheck={handleCheck} />
      {/*<CompletedList />*/}
    </div>  
  );
}

export default App;
