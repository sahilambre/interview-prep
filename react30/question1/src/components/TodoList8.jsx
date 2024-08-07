import React, { useState } from "react";

const TodoList8 = () => {
  const [listItem, setListItem] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setListItem([...listItem, inputValue]);
      setInputValue("");
    }
  };

  const removeItem = (index) => {
    const newList = listItem.filter((item, i) => i !== index);
    setListItem(newList);
  };

  return (
    <div>
      <h2>Enter List item here</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {listItem.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList8;
