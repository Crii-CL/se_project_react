import "../blocks/ClothesSection.css";
import { useState } from "react";

const ClothesSection = ({ openForm }) => {
  const [weatherType, setWeatherType] = useState("");

  return (
    <div className="clothes">
      <h2 className="clothes__header">Your Items</h2>
      <button className="clothes__button" onClick={openForm}>
        +Add New
      </button>
      <fieldset className="clothes__radio">
        <label className="clothes__label">
          <input
            type="radio"
            className="modal__input"
            name="temperature"
            value="Hot"
            onChange={(e) => setWeatherType(e.target.value)}
          ></input>
          Hot
        </label>
        <label className="clothes__label">
          <input
            type="radio"
            className="modal__input"
            name="temperature"
            value="Warm"
            onChange={(e) => setWeatherType(e.target.value)}
          ></input>
          Warm
        </label>
        <label className="clothes__label">
          <input
            type="radio"
            className="modal__input"
            name="temperature"
            value="Cold"
            onChange={(e) => setWeatherType(e.target.value)}
          ></input>
          Cold
        </label>
      </fieldset>
    </div>
  );
};

export default ClothesSection;
