import React from "react";
import closeButton from "../images/close-button.svg";
import FormValidator from "./FormValidator";

const ModalWithForm = ({
  name,
  title,
  buttonText,
  isModalOpen,
  handleSubmit,
  handleOverlayClick,
  onClose,
  children,
  error,
  setError,
  toggleSubmit,
  setToggleSubmit,
}) => {
  const checkInputValidity = () => {
    const formInputs = document.querySelectorAll(".modal__input");

    formInputs.forEach((input) => {
      if (!input.validity.valid) {
        setError(true);
        input.classList.add("error");
        // input.classList.remove("valid");
      } else {
        setError(false);
        input.classList.remove("error");
        // input.classList.add("valid");
      }
    });
  };

  return (
    <div
      className={`modal modal_type_${name} ${
        isModalOpen ? "modal_opened" : ""
      } ${!isModalOpen && onClose ? "modal_closed" : ""}`}
      onClick={handleOverlayClick}
    >
      <form
        className={`modal__form modal__form_${name}`}
        onSubmit={handleSubmit}
      >
        <button
          className={`modal__closeBtn modal__closeBtn_${name}`}
          id="clothes-form-close"
          type="button"
          onClick={onClose}
        >
          <img src={closeButton} alt="dark close button"></img>
        </button>
        <h2 className={`modal__title modal__title_${name}`}>{title}</h2>
        {children}
        <button type="submit" className={`modal__submit modal__submit_${name}`}>
          {buttonText}
        </button>
      </form>
    </div>
  );
};
export default ModalWithForm;
