import React from "react";

export default function LIstComponent({ startList }) {
  const data = startList;
  console.log(startList);

  return (
    <div className="list">
      {data.map((element, index) => (
        <div className="element-box" key={index}>
          <p>{element.counter} ps.</p>
          <p>{element.name}</p>
          <button>X</button>
        </div>
      ))}
    </div>
  );
}
