import React from "react";
import { useState } from "react";

export default function Checkbox({ label, checked, handleChange }) {
  return (
    <label className="checkbox__slider-label">
      <input
        className="checkbox__slider-box"
        type="checkbox"
        label={label}
        checked={checked}
        onChange={handleChange}
      ></input>
      F<span className="checkbox__slider-circle"></span>
    </label>
  );
}
