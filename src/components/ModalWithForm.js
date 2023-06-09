import React from "react";
import closeButton from "../images/close-button.svg";

export default function ModalWithForm({
  name,
  title,
  buttonText,
  isModalOpen,
  handleSubmit,
  handleOverlayClick,
  onClose,
  children,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${
        isModalOpen ? "modal_opened" : ""
      }`}
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
}
