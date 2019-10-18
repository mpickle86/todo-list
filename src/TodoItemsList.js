import React from "react";

function TodoItemsList() {
  const todoItemsArray = localStorage.getItem("todoItemsArray");

  return (
    <div>
      <p>{todoItemsArray}</p>
    </div>
  )
}

export default TodoItemsList;