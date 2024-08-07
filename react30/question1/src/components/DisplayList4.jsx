import React from "react";

const DisplayList4 = () => {
  const items = ["item1", "item2", "item3", "item4", "item5"];
  return (
    <div>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default DisplayList4;
