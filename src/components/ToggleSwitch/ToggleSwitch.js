import "../ToggleSwitch/ToggleSwitch.css";

export default function ToggleSwitch({ name, tempIsF, tempIsC, handleChange }) {
  return (
    <label className="switch">
      <input
        className="switch__box"
        type="checkbox"
        name={name}
        tempIsF={tempIsF}
        tempIsC={tempIsC}
        onChange={handleChange}
      ></input>
      <span className="switch__slider">
        <p className="switch__temp" id="switch-F">
          F
        </p>
        <p className="switch__temp" id="switch-C">
          C
        </p>
      </span>
    </label>
  );
}
