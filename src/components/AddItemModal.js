import ModalWithForm from "./ModalWithForm";
import "../blocks/AddItemModal.css";
import "../blocks/modal.css"; //if inputs look weird double check the import
import React, { useEffect, useState } from "react";

const AddItemModal = ({
  onClose,
  isModalOpen,
  handleOverlayClick,
  onAddItem,
  error,
  setError,
  toggleSubmit,
  setToggleSubmit,
}) => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [linkInputValue, setLinkInputValue] = useState("");
  const [weatherType, setWeatherType] = useState("");

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
      toggleSubmit={toggleSubmit}
      setToggleSubmit={setToggleSubmit}
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
          }}
        ></input>
        <p className="addItem__caption">Image</p>
        <input
          type="url"
          className="modal__input"
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
