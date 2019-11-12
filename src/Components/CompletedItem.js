import React, {useRef, useEffect} from "react";
import "../Styles/CompletedItem Styles.css";
import deleteIconBlue from "../Graphics/Delete Icon Blue.png";
import deleteIconGray from "../Graphics/Delete Icon Gray.png";

function CompletedItem(props) {
  //checks for touchscreen for hover effect management
  const checkedClass = useRef("nonTouchChecked");
  useEffect(() => {
    if ("ontouchstart" in window
       || navigator.maxTouchPoints > 0
       || navigator.msMaxTouchPoints > 0) {
      checkedClass.current = "touchChecked";   
    }
  });

  return (
    <div className="completedItem">
      <div className="itemNameContainer">
        <span className={"completedCheckbox " + checkedClass.current}
              onClick={() => props.handleUncheck(props.id)}
        >
          <input type="checkbox"
                checked={props.completed}
          />
        </span>
        <label className="completedItemName">{props.name}</label>
      </div>
      <div className="removeButton"
           onClick={() => props.handleRemove(props.id, props.completed)}
      >
        <img src={deleteIconBlue}
             className="removeButtonBlue"
             alt="Remove"
        />
        <img src={deleteIconGray}
             className="removeButtonGray"
             alt="Remove"
        />
      </div> 
    </div>
  )
}

export default CompletedItem;