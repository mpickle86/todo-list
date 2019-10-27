import React from "react";
import "./EditModalStyles.css";

function EditModal(props) {
  return (
    <div className={props.editModal.show ? "editModal" : "hidden"}>
      <form onSubmit={props.handleSaveEdit}>
        <input type="text"
              name="name"
              id="nameInput"
              value={props.todoItem.name}
              placeholder="Rename Todo Item"
              onChange={props.handleChange}
        />
        <select name="urgency"
                id="urgencyInput"
                value={props.todoItem.urgency}
                onChange={props.handleChange}>
          <option>-Urgency Level-</option>
          <option value="1">1 - Most Urgent</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 - Least Urgent</option>        
        </select>
        <input type="submit" value="Save Changes" />
      </form>
    </div>
  )
}

export default EditModal;