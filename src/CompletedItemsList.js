import React from "react";
import CompletedItem from "./CompletedItem";
import "./CompletedItemsList Styles.css";

function CompletedItemsList(props) {
  //creates CompletedItem components
  const completedItems = props.completedItemsArray.map(item =>
    <CompletedItem key={props.completedItemsArray.indexOf(item)}
              id={props.completedItemsArray.indexOf(item)}
              name={item.name}
              urgency={item.urgency}
              completed={item.completed}
              handleUncheck={props.handleUncheck}
              handleRemove={props.handleRemove}
    />
  )

  return (
    <div className="completedItemsList">
      <h3>Completed Items:</h3>
      {completedItems}
    </div>
  )
}

export default CompletedItemsList;