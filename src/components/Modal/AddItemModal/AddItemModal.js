import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
import React, { useEffect, useState } from "react";

export default function AddItemModal({
  onClose,
  isModalOpen,
  handleOverlayClick,
  onAddItem,
}) {
  const [nameInputValue, setNameInputValue] = React.useState("");
  const [linkInputValue, setLinkInputValue] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    function clearInputs() {
      setNameInputValue("");
      setLinkInputValue("");
    }

    if (isModalOpen) {
      clearInputs();
    }
  }, [isModalOpen]);

  return (
    <ModalWithForm
      name="Add New Items"
      title="New Items:"
      buttonText="Add Garment"
      onClose={onClose}
      isModalOpen={isModalOpen}
      handleSubmit={handleSubmit}
      handleOverlayClick={handleOverlayClick}
    >
      <fieldset className="formModal__fieldset" id="input-fieldset">
        <p className="formModal__caption">Name</p>
        <input
          type="text"
          className="formModal__input"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          required
          id="name-input"
          value={nameInputValue}
          onChange={(e) => {
            setNameInputValue(e.target.value);
          }}
        ></input>
        <p className="formModal__caption">Image</p>
        <input
          type="url"
          className="formModal__input"
          placeholder="Image URL"
          minLength="1"
          maxLength="30"
          required
          id="link-input"
          value={linkInputValue}
          onChange={(e) => {
            setLinkInputValue(e.target.value);
          }}
        ></input>
      </fieldset>
      <h3 className="formModal__title" id="weather-type-title">
        Select the weather type:
      </h3>
      <fieldset className="formModal__fieldset" id="radio-button-fieldset">
        <label className="formModal__label">
          <input
            type="radio"
            className="formModal__input"
            name="hot"
            value="hot"
          ></input>
          Hot
        </label>
        <label className="formModal__label">
          <input
            type="radio"
            className="formModal__input"
            name="warm"
            value="warm"
          ></input>
          Warm
        </label>
        <label className="formModal__label">
          <input
            type="radio"
            className="formModal__input"
            name="cold"
            value="cold"
          ></input>
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
