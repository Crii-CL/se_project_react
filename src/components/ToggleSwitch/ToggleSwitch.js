// import "../ToggleSwitch/ToggleSwitch.css";

// export default function ToggleSwitch({ name, tempIsF, tempIsC, onChange }) {
//   return (
//     <label className="switch">
//       <input
//         className="switch__box"
//         type="checkbox"
//         name={name}
//         onChange={onChange}
//       ></input>
//       <span
//         className={`${tempIsF ? "switch__slider-F" : "switch__slider-C"}`}
//       ></span>
//       <p className={`switch__temp-F ${tempIsF ? "switch_active" : ""}`}>F</p>
//       <p className={`switch__temp-C ${tempIsC ? "switch_active" : ""}`}>C</p>
//     </label>
//   );
// }

import "../ToggleSwitch/ToggleSwitch.css";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";
import { useContext } from "react";

export default function ToggleSwitch({ name }) {
  const { toggleTempSwitch } = useContext(CurrentTempUnitContext);
  const { currentTempUnit } = useContext(CurrentTempUnitContext);

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
          currentTempUnit === "F" ? "switch__slider-F" : "switch__slider-C"
        }
      ></span>
      <p
        className={`switch__temp-F ${
          currentTempUnit === "F" ? "switch_active" : ""
        }`}
      >
        F
      </p>
      <p
        className={`switch__temp-C ${
          currentTempUnit === "C" ? "switch_active" : ""
        }`}
      >
        C
      </p>
    </label>
  );
}
