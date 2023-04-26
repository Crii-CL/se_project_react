import "../blocks/ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

export default function ToggleSwitch({ name }) {
  const { toggleTempSwitch } = useContext(CurrentTemperatureUnitContext);
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <label className="switch">
      <input
        className="switch__box"
        type="checkbox"
        name={name}
        onClick={toggleTempSwitch}
      ></input>
      <span
        className={
          currentTemperatureUnit === "F"
            ? "switch__slider-F"
            : "switch__slider-C"
        }
      ></span>
      <p
        className={`switch__temp-F ${
          currentTemperatureUnit === "F" ? "switch_active" : ""
        }`}
      >
        F
      </p>
      <p
        className={`switch__temp-C ${
          currentTemperatureUnit === "C" ? "switch_active" : ""
        }`}
      >
        C
      </p>
    </label>
  );
}
