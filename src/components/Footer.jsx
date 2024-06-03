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

  const percentPackedItems =
        totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;
    
        if (totalItems <= 0)
            return (
              <div className="stats">
                <em>Start adding some items to your packing list 🚀</em>
              </div>
            );

    return (
        percentPackedItems == 100 ? (
          <div className="stats">
            <h5>You got everything! Ready to go ✈️</h5>
          </div>
        ) : (
          <div className="stats">
            <h5>You have {totalItems} items in your list</h5>
            <h6>
              You already packed {packedItems} items ({`${percentPackedItems}%`})
            </h6>
          </div>
        )
      );
}
