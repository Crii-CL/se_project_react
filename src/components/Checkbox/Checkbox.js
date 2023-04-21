import React from "react";
import { useState } from "react";

export default function Checkbox({ label, value }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label className="checkbox__slider-label">
      <input
        className="checkbox__slider-box"
        type="checkbox"
        label={label}
        checked={value}
        onChange={handleChange}
      ></input>
      F<span className="checkbox__slider-circle"></span>
    </label>
  );
}
