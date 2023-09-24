import ModalWithForm from "./ModalWithForm";
import "../blocks/AddItemModal.css";
import "../blocks/modal.css";
import React, { useEffect, useState } from "react";
import validator from "validator";

const AddItemModal = ({
  onClose,
  isModalOpen,
  handleOverlayClick,
  onAddItem,
  error,
  setError,
  setIsValidUrl,
  isValidUrl,
}) => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [linkInputValue, setLinkInputValue] = useState("");
  const [weatherType, setWeatherType] = useState("");

  const [nameValidationMessage, setNameValidationMessage] = useState("");
  const [linkValidationMessage, setLinkValidationMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem(nameInputValue, linkInputValue, weatherType);
  }

  useEffect(() => {
    function clearInputs() {
      setNameInputValue("");
      setLinkInputValue("");
      setWeatherType("");
    }

    if (isModalOpen) {
      clearInputs();
    }
  }, [isModalOpen]);

  return (
    <ModalWithForm
      name="add-item"
      title="New Items:"
      buttonText="Add Garment"
      onClose={onClose}
      isModalOpen={isModalOpen}
      handleSubmit={handleSubmit}
      handleOverlayClick={handleOverlayClick}
      onAddItem={onAddItem}
      error={error}
      setError={setError}
      isValidUrl={setIsValidUrl}
    >
      <fieldset className="addItem__fieldset" id="input-fieldset">
        <p className="addItem__caption">Name</p>
        <input
          type="text"
          className="modal__input"
          placeholder="Name"
          minLength="1"
          maxLength="50"
          required
          id="name-input"
          value={nameInputValue}
          onChange={(e) => {
            setNameInputValue(e.target.value);
            setNameValidationMessage(e.target.validationMessage);
          }}
        ></input>
        <p
          className={`error-message ${
            nameInputValue.length === 0 ? "hidden" : ""
          }`}
        >
          {nameValidationMessage}
        </p>
        <p className="addItem__caption" id="add-item-image-caption">
          Image
        </p>
        <input
          type="url"
          className="modal__input"
          placeholder="Image URL"
          minLength="10"
          maxLength="100"
          required
          id="link-input"
          value={linkInputValue}
          onChange={(e) => {
            setLinkInputValue(e.target.value);
            if (validator.isURL(e.target.value)) {
              setLinkValidationMessage(e.target.validationMessage);
              setIsValidUrl(true);
              e.target.setCustomValidity = true;
            } else {
              setLinkValidationMessage("Please enter a valid URL");
              setIsValidUrl(false);
              e.target.setCustomValidity = false;
            }
          }}
        ></input>
        <p
          className={`error-message ${
            linkInputValue.length === 0 ? "hidden" : ""
          }`}
        >
          {linkValidationMessage}
        </p>
      </fieldset>
      <h3 className="addItem__title" id="weather-type-title">
        Select the weather type:
      </h3>
      <fieldset className="addItem__fieldset" id="radio-button-fieldset">
        <label className="addItem__label">
          <input
            type="radio"
            className="modal__input"
            name="temperature"
            value="Hot"
            onChange={(e) => setWeatherType(e.target.value)}
          ></input>
          Hot
        </label>
        <label className="addItem__label">
          <input
            type="radio"
            className="modal__input"
            name="temperature"
            value="Warm"
            onChange={(e) => setWeatherType(e.target.value)}
          ></input>
          Warm
        </label>
        <label className="addItem__label">
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
    </ModalWithForm>
  );
};

export default AddItemModal;
