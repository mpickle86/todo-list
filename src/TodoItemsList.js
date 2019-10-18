import React, {useState} from "react";
import TodoItem from "./TodoItem";

function TodoItemsList() {
  const initialArrayString = localStorage.getItem("todoItemsArray");
  const initialArray = JSON.parse(initialArrayString);
  const [todoItemsArray] = useState(initialArray || []);

  const todoItems = todoItemsArray.map(item => <TodoItem key={todoItemsArray.indexOf(item) + 1} name={item} />)

  return (
    <div>
      <p>{todoItems}</p>
    </div>
  )
}

export default TodoItemsList;