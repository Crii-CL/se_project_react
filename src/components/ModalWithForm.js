import React from "react";
import closeButton from "../images/close-button.svg";
import "../blocks/modal.css";
import { useEffect } from "react";
import validator from "validator";
import { isVisible } from "@testing-library/user-event/dist/utils";

const ModalWithForm = ({
  name,
  title,
  buttonText,
  isModalOpen,
  handleSubmit,
  handleOverlayClick,
  onClose,
  children,
  setError,
  error,
  isValidUrl,
}) => {
  useEffect(() => {
    //display input's valid state
    let formInputs = document.querySelectorAll(".modal__input");
    let submitButton = document.querySelectorAll(".modal__submit");
    formInputs.forEach((input) => {
      if (!input.validity.valid) {
        setError(true);
        input.classList.add("error");
        input.classList.remove("valid");
        submitButton.disabled = true;
      }
      if (input.validity.valid || input.value.length < 1) {
        setError(false);
        input.classList.remove("error");
        input.classList.add("valid");
      }
    });
  });

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
        // noValidate
      >
        <button
          className={`modal__closeBtn modal__closeBtn_${name}`}
          type="button"
          onClick={onClose}
        >
          <img src={closeButton} alt="dark close button"></img>
        </button>
        <h2 className={`modal__title modal__title_${name}`}>{title}</h2>
        {children}
        <button
          type={`${!error ? "submit" : "button"}`}
          className={`modal__submit modal__submit_${name}`}
          onClick={(e) => {
            if (error === true) {
              e.preventDefault();
            }
          }}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};
export default ModalWithForm;
