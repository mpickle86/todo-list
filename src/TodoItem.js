import React from "react";
import "./TodoItem Styles.css";
import deleteIconGray from "./Delete Icon Gray.png";
import deleteIconBlue from "./Delete Icon Blue.png";
import editIconGray from "./Edit Icon Gray.png";
import editIconBlue from "./Edit Icon Blue.png";

function TodoItem(props) {
  const urgencyClass = "urgency" + props.urgency;

  return (
    <div className={"todoItem " + urgencyClass}>
      <div className="itemNameContainer">
        <span className="checkbox"
              onClick={() => props.handleCheck(props.id)}  
        >
          <input type="checkbox"
                checked={props.completed}
          />
        </span>
        <label className="itemName">{props.name}</label>
      </div>
      <div className="buttonContainer">
        <div className="editButton"
             onClick={() => props.handleEditButton(props.id, props.name)}
        >
          <img src={editIconBlue}
               className="blueButton"
               id="editButtonBlue"
               title="Edit"
               alt="Edit Button"
          />
          <img src={editIconGray}
               className="grayButton"
               id="editButtonGray"
               title="Edit"
               alt="Edit Button"
          />
        </div>
        <div className="removeButton"
             onClick={() => props.handleRemove(props.id, props.completed)}
        >
          <img src={deleteIconBlue}
               className="blueButton"
               id="removeButtonBlue"
               title="Remove"
               alt="Remove Button"
          />
          <img src={deleteIconGray}
               className="grayButton"
               id="removeButtonGray"
               title="Remove"
               alt="Remove Button"
          />
        </div>           
      </div>
    </div>  
  )
}

export default TodoItem;