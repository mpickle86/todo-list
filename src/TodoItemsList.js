import React from "react";
import TodoItem from "./TodoItem";

function TodoItemsList(props) {
  
  //creates TodoItem components
  const todoItems = props.todoItemsArray.map(item =>
    <TodoItem key={props.todoItemsArray.indexOf(item)}
              id={props.todoItemsArray.indexOf(item)}
              name={item.name}
              completed={item.completed}
              handleCheck={props.handleCheck} />)

  return (
    <div>
      {todoItems}
    </div>
  )
}

export default TodoItemsList;