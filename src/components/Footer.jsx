import React from "react";

export default function Footer({ items }) {
  let totalItems = 0;
  let packedItems = 0;
  

  items.map((item) => {
    totalItems += Number(item.counter);
    if (item.packed) {
      packedItems += Number(item.counter);
    }
  });
    
    
  const percentPackedItems = totalItems > 0 ? ((packedItems / totalItems) * 100).toFixed(0) : 0;


  return (
    <div className="stats">
      <h5>You have {totalItems} items in your list</h5>
      <h6>
        You already packet {packedItems} items {`${percentPackedItems}%`}
      </h6>
    </div>
  );
}
