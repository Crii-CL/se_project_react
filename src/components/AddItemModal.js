import ModalWithForm from "./ModalWithForm";
import "../blocks/AddItemModal.css";
import React, { useEffect, useState } from "react";

export default function AddItemModal({
  onClose,
  isModalOpen,
  handleOverlayClick,
  onAddItem,
}) {
  const [nameInputValue, setNameInputValue] = useState("");
  const [linkInputValue, setLinkInputValue] = useState("");
  const [weatherType, setWeatherType] = useState("");

  /* ------------------------------------ . ----------------------------------- */
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [url, setUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const [formValid, setFormValid] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    validateName();
    validateForm();
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    validateUrl();
    validateForm();
  };

  const validateName = () => {
    setNameError(name.length > 0 ? "" : "Name is required");
  };

  const validateUrl = () => {
    if (url.length > 0) {
      const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
      setUrlError(urlRegex.test(url) ? "" : "Invalid URL");
    } else {
      setUrlError("URL is required");
    }
  };

  const validateForm = () => {
    const isValid = name.length > 0 && url.length > 0 && urlError === "";
    setFormValid(isValid);
  };
  /* ------------------------------------ . ----------------------------------- */

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
    >
      <fieldset className="addItem__fieldset" id="input-fieldset">
        <p className="addItem__caption">Name</p>
        <input
          type="text"
          className="addItem__input"
          placeholder="Name"
          minLength="1"
          maxLength="50"
          required
          id="name-input"
          value={nameInputValue}
          onChange={(e) => {
            setNameInputValue(e.target.value);
          }}
        ></input>
        <p className="addItem__caption">Image</p>
        <input
          type="url"
          className="addItem__input"
          placeholder="Image URL"
          minLength="1"
          maxLength="100"
          required
          id="link-input"
          value={linkInputValue}
          onChange={(e) => {
            setLinkInputValue(e.target.value);
          }}
        ></input>
      </fieldset>
      <h3 className="addItem__title" id="weather-type-title">
        Select the weather type:
      </h3>
      <fieldset className="addItem__fieldset" id="radio-button-fieldset">
        <label className="addItem__label">
          <input
            type="radio"
            className="addItem__input"
            name="temperature"
            value="Hot"
            onChange={(e) => setWeatherType(e.target.value)}
          ></input>
          Hot
        </label>
        <label className="addItem__label">
          <input
            type="radio"
            className="addItem__input"
            name="temperature"
            value="Warm"
            onChange={(e) => setWeatherType(e.target.value)}
          ></input>
          Warm
        </label>
        <label className="addItem__label">
          <input
            type="radio"
            className="addItem__input"
            name="temperature"
            value="Cold"
            onChange={(e) => setWeatherType(e.target.value)}
          ></input>
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
