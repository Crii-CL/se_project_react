import "../ToggleSwitch/ToggleSwitch.css";

export default function ToggleSwitch({
  name,
  tempIsF,
  tempIsC,
  handleClick,
  handleChange,
}) {
  return (
    <label className="switch">
      <input
        className="switch__box"
        type="checkbox"
        name={name}
        onClick={handleClick}
        onChange={handleChange}
      ></input>
      <span className="switch__slider">
        <p className={`switch__temp-F ${tempIsF ? "switch_active" : ""}`}>F</p>
        <p className={`switch__temp-C ${tempIsC ? "switch_active" : ""}`}>C</p>
      </span>
    </label>
  );
}
