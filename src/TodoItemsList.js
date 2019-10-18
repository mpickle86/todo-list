import React from "react";
import TodoItem from "./TodoItem";

function TodoItemsList(props) {
  
  //creates TodoItem components
  const todoItems = props.todoItemsArray.map(item =>
    <TodoItem key={props.todoItemsArray.indexOf(item) + 1}
              name={item} />)

  return (
    <div>
      {todoItems}
    </div>
  )
}

export default TodoItemsList;