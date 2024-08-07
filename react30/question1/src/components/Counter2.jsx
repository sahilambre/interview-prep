import React, { useState } from "react";

const Counter2 = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter((c) => c + 1);
  };

  const handleSubtract = () => {
    setCounter((c) => c - 1);
  };

  const handleReset = () => {
    setCounter((c) => 0);
  };

  return (
    <>
      <p>{counter}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Counter2;
