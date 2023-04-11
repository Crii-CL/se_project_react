import "./ModalWithForm.css";

export default function ModalWithForm() {
  return (
    <>
      <div className="formModal">
        <form className="formModal__form">
          <button className="formModal__close" type="button"></button>
          <h1 className="formModal__title" id="new-garment">
            New Garment
          </h1>
          <fieldset className="formModal_fieldset">
            <p className="formModal__caption">Name</p>
            <input className="formModal__input" placeholder="Name"></input>
            <p className="formModal__caption">Image</p>
            <input className="formModal__input" placeholder="Image URL"></input>
            <h1 className="formModal__title" id="weather-type">
              Select the weather type:
            </h1>
            <div className="formModal__btn-container">
              <button type="radio" className="formModal__btn-radio"></button>
              <button type="radio" className="formModal__btn-radio"></button>
              <button type="radio" className="formModal__btn-radio"></button>
              <button type="submit" className="formModal__btn-submit"></button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
