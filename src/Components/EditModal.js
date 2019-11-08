import React from "react";
import "../Styles/EditModal Styles.css";

function EditModal(props) {
  return (
    <div className={props.editModal.show ? "editModal" : "hidden"}>
      <header className="editHeader">Edit "{props.editModal.itemToEditName}"</header>
      <form onSubmit={props.handleSaveEdit}
            className="editForm"
      >
        <input type="text"
              name="name"
              className="editNameInput"
              value={props.todoItem.name}
              placeholder="Rename Todo Item"
              onChange={props.handleChange}
        />
        <select name="urgency"
                className="editUrgencyInput"
                value={props.todoItem.urgency}
                onChange={props.handleChange}>
          <option>-Urgency Level-</option>
          <option value="1">1 - Most Urgent</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 - Least Urgent</option>        
        </select>
        <div>
          <input type="submit"
                value="Save"
                className="editModalButton"
          />
          <button type="button"
                  className="editModalButton"
                  onClick={props.handleCancelEdit}
          >Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditModal;