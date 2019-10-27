import React from "react";
import TodoItem from "./TodoItem";
import EditModal from "./EditModal";

function TodoItemsList(props) {
  
  //creates TodoItem components
  const todoItems = props.todoItemsArray.map(item =>
    <TodoItem key={props.todoItemsArray.indexOf(item)}
              id={props.todoItemsArray.indexOf(item)}
              name={item.name}
              urgency={item.urgency}
              completed={item.completed}
              handleCheck={props.handleCheck}
              handleEditButton={props.handleEditButton}
              handleRemove={props.handleRemove}
    />
  )

  return (
    <div>
      {todoItems}
      <EditModal editModal={props.editModal}
                 todoItem={props.todoItem}
                 todoItemsArray={props.todoItemsArray}
                 handleChange={props.handleChange}
                 handleSaveEdit={props.handleSaveEdit} />
    </div>
  )
}

export default TodoItemsList;