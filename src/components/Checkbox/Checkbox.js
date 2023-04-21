import "../Checkbox/Checkbox.css";

export default function Checkbox({ name, isChecked, handleChange }) {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input
          className="checkbox__box"
          type="checkbox"
          name={name}
          isChecked={isChecked}
          onChange={handleChange}
        ></input>
        <span className="checkbox__slider"></span>
      </label>
    </div>
  );
}
