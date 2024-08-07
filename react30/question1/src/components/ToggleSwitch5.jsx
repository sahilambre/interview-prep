import React, { useState } from "react";

const ToggleSwitch5 = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggleChange = () => {
    setToggle((t) => !toggle);
  };

  return (
    <div>
      <label htmlFor="">
        <input type="checkbox" name="" id="" onChange={handleToggleChange} />
      </label>
      <p>toggle: {!toggle ? "On" : "Off"}</p>
    </div>
  );
};

export default ToggleSwitch5;
