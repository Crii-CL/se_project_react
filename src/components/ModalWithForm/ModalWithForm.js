import "./ModalWithForm.css";
import closeButton from "../../images/close-button.svg";

export default function ModalWithForm() {
  return (
    <>
      <div className="formModal">
        <form className="formModal__form">
          <button className="formModal__close" type="button">
            <img src={closeButton}></img>
          </button>
          <h1 className="formModal__title" id="new-garment">
            New Garment:
          </h1>
          <fieldset className="formModal__fieldset" id="input-fieldset">
            <p className="formModal__caption">Name</p>
            <input className="formModal__input" placeholder="Name"></input>
            <p className="formModal__caption">Image</p>
            <input className="formModal__input" placeholder="Image URL"></input>
          </fieldset>
          <h1 className="formModal__title" id="weather-type">
            Select the weather type:
          </h1>
          <fieldset className="formModal__fieldset" id="button-fieldset">
            <label className="formModal__label">
              <input
                type="radio"
                className="formModal__input"
                name="Hot"
              ></input>
              Hot
            </label>
            <label className="formModal__label">
              <input
                type="radio"
                className="formModal__input"
                name="Warm"
              ></input>
              Warm
            </label>
            <label className="formModal__label">
              <input type="radio" className="formModal__input"></input>
              Cold
            </label>
            <button type="submit" className="formModal__btn-submit">
              Add Garment
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
