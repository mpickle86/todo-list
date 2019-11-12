import React, {useRef, useEffect} from "react";
import "../Styles/EditModal Styles.css";

function EditModal(props) {
  //checks for touchscreen for hover effect management
  const buttonClass = useRef("nonTouchButton");
  useEffect(() => {
    if ("ontouchstart" in window
       || navigator.maxTouchPoints > 0
       || navigator.msMaxTouchPoints > 0) {
      buttonClass.current = "touchButton";   
    }
  });

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
              maxLength="50"
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
                className={"editModalButton " + buttonClass.current}
          />
          <button type="button"
                  className={"editModalButton " + buttonClass.current}
                  onClick={props.handleCancelEdit}
          >Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditModal;