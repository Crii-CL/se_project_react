import "../blocks/modal.css";
import "../blocks/ClothesSection.css";

const ClothesSection = ({ openForm, weatherType, setWeatherType }) => {
  const handleClick = (e) => {
    setWeatherType(e.target.value);
  };

  return (
    <div className="clothes">
      <input
        id="items-button"
        type="button"
        className=" clothes__header"
        name="temperature"
        value="Your Items"
        onClick={handleClick}
      ></input>
      <button className="clothes__button" onClick={openForm}>
        +Add New
      </button>
      <fieldset className="clothes__radio">
        <input
          id="clothes-hot"
          type="button"
          className={`clothes__radio-input ${
            weatherType === "Hot" ? "Hot" : "None"
          }`}
          name="temperature"
          value="Hot"
          onClick={handleClick}
        ></input>
        <input
          id="clothes-warm"
          type="button"
          className={`clothes__radio-input ${
            weatherType === "Warm" ? "Warm" : "None"
          }`}
          name="temperature"
          value="Warm"
          onClick={handleClick}
        ></input>
        <input
          id="clothes-cold"
          type="button"
          className={`clothes__radio-input ${
            weatherType === "Cold" ? "Cold" : "None"
          }`}
          name="temperature"
          value="Cold"
          onClick={handleClick}
        ></input>
      </fieldset>
    </div>
  );
};

export default ClothesSection;
