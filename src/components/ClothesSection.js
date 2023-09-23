import "../blocks/ClothesSection.css";

const ClothesSection = ({ openForm, setWeatherType }) => {
  return (
    <div className="clothes">
      <label className="clothes__header">
        <input
          id="items-button"
          type="radio"
          className="modal__input"
          name="temperature"
          value="None"
          onChange={(e) => setWeatherType(e.target.value)}
        ></input>
        Your Items
      </label>
      <button className="clothes__button" onClick={openForm}>
        +Add New
      </button>
      <fieldset className="clothes__radio">
        <label className="clothes__label">
          <input
            id="clothes-hot"
            type="radio"
            className="modal__input clothes__input"
            name="temperature"
            value="Hot"
            onChange={(e) => setWeatherType(e.target.value)}
          ></input>
          Hot
        </label>
        <label className="clothes__label">
          <input
            id="clothes-warm"
            type="radio"
            className="modal__input clothes__input"
            name="temperature"
            value="Warm"
            onChange={(e) => setWeatherType(e.target.value)}
          ></input>
          Warm
        </label>
        <label className="clothes__label">
          <input
            id="clothes-cold"
            type="radio"
            className="modal__input clothes__input"
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
