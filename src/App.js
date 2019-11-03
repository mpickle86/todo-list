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

  const [editModal, setEditModal] = useState({ show: false, itemToEdit: "" });

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
        return prevArray.indexOf(item) !== id;
      }))
    }
  }

  //opens EditModal when Edit button is clicked
  function handleEditButton(id) {
    setEditModal({
      show: true,
      itemToEdit: id
    });
  }

  //replaces item in todoItemsArray with newly edited item, sorts by urgency,
  //and hides EditModal when "Save Changes" button is clicked
  function handleSaveEdit(event) {
    setTodoItemsArray(prevArray => prevArray.filter(item => {
      return prevArray.indexOf(item) !== editModal.itemToEdit;
    })
    .concat(todoItem)
      .sort((a,b) => {
        return a.urgency - b.urgency;
      })
    )
    setEditModal({
      show: false,
      itemToEdit: ""
    })
    setTodoItem({ 
      name: "",
      urgency: "",
      completed: false
    });
    event.preventDefault();
  }

  //closes Edit Modal when "Cancel" button is clicked
  function handleCancelEdit(event) {
    setEditModal({
      show: false,
      itemToEdit: ""
    })
    event.preventDefault();
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
                     todoItem={todoItem}
                     handleCheck={handleCheck}
                     handleEditButton={handleEditButton}
                     handleChange={handleChange}
                     handleSaveEdit={handleSaveEdit}
                     handleCancelEdit={handleCancelEdit}
                     handleRemove={handleRemove}
                     editModal={editModal}
      />
      <CompletedItemsList completedItemsArray={completedItemsArray}
                          handleUncheck={handleUncheck}
                          handleRemove={handleRemove}
      />
    </div>  
  );
}

export default App;
