import React, { useState } from "react";

const UserInput3 = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <p>Type here!</p>
      <input type="text" onChange={handleInputChange} />
      <p>{input}</p>
    </>
  );
};

export default UserInput3;
