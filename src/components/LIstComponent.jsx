import React from "react";
import { useState } from "react";

export default function LIstComponent({
  startList,
  onDeleteItem,
  onToggleItem,
  setItems,
}) {
 
  //   console.log(startList);

  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = startList;
  } else if (sortBy === "description") {
    sortedItems = startList
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "packed") {
    sortedItems = startList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    
    // console.log(sortedItems);
    

  return (
    <>
      <div className="list">
        {sortedItems.map((element) => (
          <div className="element-box" key={element.id}>
            <div className="list-checkbox">
              <input
                type="checkbox"
                id="myCheckbox"
                name="myCheckbox"
                onChange={() => onToggleItem(element.id)}
              ></input>
              <p>{element.counter} </p>
            </div>
            <p
              className={element.name.length > 16 ? "small-font" : ""}
              style={{
                textDecoration: element.packed ? "line-through" : "none",
              }}
            >
              {element.name}
            </p>
            <button onClick={() => onDeleteItem(element.id)}>❌</button>
          </div>
        ))}
      </div>
      <div className="actions">
        <select
          className="ft"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={(e) => setItems([])} className="ft">
          Clear list
        </button>
      </div>
    </>
    );
    
    
}


