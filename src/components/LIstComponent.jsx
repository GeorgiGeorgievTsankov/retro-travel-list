import React from "react";

export default function LIstComponent({ startList, onDeleteItem }) {
  const data = startList;
//   console.log(startList);

  return (
    <div className="list">
      {data.map((element, index) => (
        <div className="element-box" key={element.id}>
          <div className="list-checkbox">
            <input
              type="checkbox"
              id="myCheckbox"
              name="myCheckbox"
              value="value"
            ></input>
            <p>{element.counter} </p>
          </div>
          <p className={element.name.length > 16 ? 'small-font' : ''}>
            {element.name}
          </p>
          <button onClick={ () => onDeleteItem(element.id) }>❌</button>
        </div>
      ))}
    </div>  
  );
}
