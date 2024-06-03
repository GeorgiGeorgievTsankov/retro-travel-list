import React, { useState } from "react";

export default function AddComponent({ onAddItem }) {
  const [newItem, setNewItem] = useState("");
  const [optCount, setOptCount] = useState(1);

  const count = 20;

  function counter(count) {
    let elements = [];
    for (let index = 1; index <= count; index++) {
      elements.push(
        <option key={index} value={index}>
          {index}
        </option>
      );
    }
    return elements;
  }

  function handleChangeOption(e) {
    setOptCount(e.target.value);
  }

  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleAdd = () => {
    if (newItem.trim() !== "") {
      const newData = { id: Date.now(), name: newItem, counter: optCount, packed:false };
      onAddItem(newData);
      setNewItem("");
      setOptCount(1);
    }
  };

  return (
    <div className="add-form">
      <h2>What do you need for your trip?</h2>
      <div className="units">
        <h3>Units: </h3>
              <select onChange={handleChangeOption}  value={optCount}>{counter(count)}</select>
      </div>
      <input
        type="text"
        placeholder="Items..."
        value={newItem}
        onChange={handleChange}
        maxLength={18}
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}
