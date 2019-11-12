import React, {useRef, useEffect} from "react";
import "../Styles/InputBox Styles.css";

function InputBox(props) {
  //checks for touchscreen for hover effect management
  const addButtonClass = useRef("nonTouch");
  useEffect(() => {
    if ("ontouchstart" in window
       || navigator.maxTouchPoints > 0
       || navigator.msMaxTouchPoints > 0) {
      addButtonClass.current = "touch";   
    }
  });

  return (
    <form className="form"
          onSubmit={props.handleSubmit}
    >
      <input type="text"
             name="name"
             className="nameInput"
             value={props.todoItem.name}
             placeholder="New Todo Item"
             maxlength="50"
             onChange={props.handleChange}
      />
      <select name="urgency"
              className="urgencyInput"
              value={props.todoItem.urgency}
              onChange={props.handleChange}>
        <option>-Urgency Level-</option>
        <option value="1">1 - Most Urgent</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5 - Least Urgent</option>        
      </select>
      <input type="submit"
             value="Add"
             className={"addButton " + addButtonClass.current}
      />
    </form>
  );
}

export default InputBox;