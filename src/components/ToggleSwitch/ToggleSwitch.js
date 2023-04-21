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

export default function ToggleSwitch({ name }) {
  return (
    <label className="switch">
      <input className="switch__box" type="checkbox" name={name}></input>
      <span className="switch__slider-F"></span>
      <p className="switch__temp-F "></p>
      <p className="switch__temp-C "></p>
    </label>
  );
}
