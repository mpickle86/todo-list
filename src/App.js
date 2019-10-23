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
  const initialTodoArrayString = localStorage.getItem("todoItemsArray");
  const initialTodoArray = JSON.parse(initialTodoArrayString);
  const [todoItemsArray, setTodoItemsArray] = useState(initialTodoArray || []);
  
  //initializes completedItemsArray from localStorage
  const initialCompletedArrayString = localStorage.getItem("completedItemsArray");
  const initialCompletedArray = JSON.parse(initialCompletedArrayString);
  const [completedItemsArray, setCompletedItemsArray] = useState(initialCompletedArray || []);

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
    
    //THIS PART DOESN'T WORK
    setCompletedItemsArray(prevArray => prevArray.concat(todoItemsArray.filter(item => {
      return item.completed === true;
    })))
    setTodoItemsArray(prevArray => prevArray.filter(item => {
      return item.completed === false;
    }))
  }

  //stores todoItemsArray in localStorage when new item is submitted
  useEffect(() => {
    localStorage.setItem("todoItemsArray", JSON.stringify(todoItemsArray));
  }, [todoItemsArray]);
  
  //stores completedItemsArray in localStorage when new item is submitted
  useEffect(() => {
    localStorage.setItem("completedItemsArray", JSON.stringify(completedItemsArray));
  }, [completedItemsArray]);

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
