import "../Checkbox/Checkbox.css";

export default function Checkbox({ name, isChecked, handleChange }) {
  return (
    <label className="checkbox">
      <input
        className="checkbox__box"
        type="checkbox"
        name={name}
        isChecked={isChecked}
        onChange={handleChange}
      ></input>
      <span className="checkbox__slider">
        <p className="checkbox__temp" id="checkbox-F">
          F
        </p>
        <p className="checkbox__temp" id="checkbox-C">
          C
        </p>
      </span>
    </label>
  );
}
