import "./ModalWithForm.css";
import closeButton from "../../images/close-button.svg";

export default function ModalWithForm({
  handleSubmit,
  isFormModalOpen,
  handleOverlayCLick,
  handleClose,
}) {
  return (
    <>
      <div
        className={`formModal ${isFormModalOpen ? "formModal_opened" : ""}`}
        onClick={handleOverlayCLick}
        id="garment-form-modal"
      >
        <form className="formModal__form">
          <button
            className="modal__closeBtn"
            id="modal-form-close"
            type="button"
            onClick={handleClose}
          >
            <img src={closeButton}></img>
          </button>
          <h1 className="formModal__title" id="new-garment">
            New Garment:
          </h1>
          <fieldset className="formModal__fieldset" id="input-fieldset">
            <p className="formModal__caption">Name</p>
            <input
              className="formModal__input"
              placeholder="Name"
              required
            ></input>
            <p className="formModal__caption">Image</p>
            <input
              className="formModal__input"
              placeholder="Image URL"
              required
            ></input>
          </fieldset>
          <h1 className="formModal__title" id="weather-type">
            Select the weather type:
          </h1>
          <fieldset className="formModal__fieldset" id="button-fieldset">
            <label className="formModal__label">
              <input
                type="radio"
                className="formModal__input"
                name="formModal-radio"
              ></input>
              Hot
            </label>
            <label className="formModal__label">
              <input
                type="radio"
                className="formModal__input"
                name="formModal-radio"
              ></input>
              Warm
            </label>
            <label className="formModal__label">
              <input
                type="radio"
                className="formModal__input"
                name="formModal-radio"
              ></input>
              Cold
            </label>
            <button
              type="submit"
              className="formModal__submit"
              onClick={handleSubmit}
            >
              Add Garment
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
