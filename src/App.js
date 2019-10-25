import React, {useState, useEffect, useReducer} from 'react';
import './App.css';
import InputBox from "./InputBox";
import TodoItemsList from "./TodoItemsList";
import CompletedItemsList from "./CompletedItemsList";

function App() {
  const [todoItem, setTodoItem] = useReducer(
    (state, newState) => ({...state, ...newState}),
    { name: "", urgency: "", completed: false }
  );

  //initializes todoItemsArray from localStorage
  const initialTodoArrayString = localStorage.getItem("todoItemsArray");
  const initialTodoArray = JSON.parse(initialTodoArrayString);
  const [todoItemsArray, setTodoItemsArray] = useState(initialTodoArray || []);
  
  //initializes completedItemsArray from localStorage
  const initialCompletedArrayString = localStorage.getItem("completedItemsArray");
  const initialCompletedArray = JSON.parse(initialCompletedArrayString);
  const [completedItemsArray, setCompletedItemsArray] = useState(initialCompletedArray || []);

  //handles controlled inputs for name and urgency
  function handleChange(event) {
    setTodoItem({
      [event.target.name]: event.target.value,
      completed: false
    });
  }

  //adds new item to todoItemsArray in state and sorts by urgency
  function handleSubmit(event) {
    setTodoItemsArray(prevArray => prevArray.concat(todoItem)
      .sort((a,b) => {
        return a.urgency - b.urgency;
      })
    )
    setTodoItem({ 
      name: "",
      urgency: "",
      completed: false
    });
    event.preventDefault();
  }

  //moves item to completedItemsArray and toggles "completed" when checkbox is checked
  function handleCheck(id) {
    setCompletedItemsArray(prevArray => prevArray.concat(todoItemsArray.filter(item => {
      return todoItemsArray.indexOf(item) === id;
    })).map(item => {
         return { ...item, completed: true };
       })
    )
    setTodoItemsArray(prevArray => prevArray.filter(item => {
      return prevArray.indexOf(item) !== id;
    }))
  }

  //moves item back to todoItemsArray, sorts by urgency, and toggles "completed" when checkbox is unchecked
  function handleUncheck(id) {
    setTodoItemsArray(prevArray => prevArray.concat(completedItemsArray.filter(item => {
      return completedItemsArray.indexOf(item) === id;
    })).sort((a,b) => {
         return a.urgency - b.urgency;
       })
       .map(item => {
         return { ...item, completed: false };
       })
    )
    setCompletedItemsArray(prevArray => prevArray.filter(item => {
      return prevArray.indexOf(item) !== id;
    }))
  }

  //removes item from its array when "Remove" button is clicked
  function handleRemove(id, completed) {
    if (completed === false) {
      setTodoItemsArray(prevArray => prevArray.filter(item => {
        return prevArray.indexOf(item) !== id;
      }))
    } else {
      setCompletedItemsArray(prevArray => prevArray.filter(item => {
        return prevArray.indexOf(item) !==id;
      }))
    }
  }

  //stores todoItemsArray in localStorage when new item is submitted
  useEffect(() => {
    localStorage.setItem("todoItemsArray", JSON.stringify(todoItemsArray));
  }, [todoItemsArray]);
  
  //stores completedItemsArray in localStorage when new item is added
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
                     handleCheck={handleCheck}
                     handleRemove={handleRemove}
      />
      <CompletedItemsList completedItemsArray={completedItemsArray}
                          handleUncheck={handleUncheck}
                          handleRemove={handleRemove}
      />
    </div>  
  );
}

export default App;
