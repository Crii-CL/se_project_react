import React, { useContext } from "react";
import ModalWithForm from "./ModalWithForm";
import "../blocks/modal.css";
import "../blocks/EditProfileModal.css";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const EditProfileModal = ({
  onClose,
  isModalOpen,
  handleOverlayClick,
  editProfile,
  error,
  setError,
  toggleSubmit,
  setToggleSubmit,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [nameInputValue, setNameInputValue] = useState("");
  const [avatarInputValue, setAvatarInputValue] = useState("");

  const [nameValidationMessage, setNameValidationMessage] = useState("");
  const [avatarValidationMessage, setAvatarValidationMessage] = useState("");

  useEffect(() => {
    if (currentUser?.name) {
      setNameInputValue(currentUser.name);
    }
    if (currentUser?.avatar) {
      setAvatarInputValue(currentUser.avatar);
    }
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    editProfile(nameInputValue, avatarInputValue);
  }

  return (
    <ModalWithForm
      name="edit-profile"
      title="Change Profile Data"
      buttonText="Save Changes"
      onClose={onClose}
      isModalOpen={isModalOpen}
      handleSubmit={handleSubmit}
      handleOverlayClick={handleOverlayClick}
      error={error}
      setError={setError}
      toggleSubmit={toggleSubmit}
      setToggleSubmit={setToggleSubmit}
    >
      <fieldset className="edit">
        <p className="edit__caption">Name*</p>
        <input
          className="modal__input"
          type="text"
          placeholder="Name"
          value={nameInputValue}
          required
          minLength="2"
          onChange={(e) => {
            setNameInputValue(e.target.value);
            setNameValidationMessage(e.target.validationMessage);
          }}
        ></input>
        <p className="error-message">{nameValidationMessage}</p>
        <p className="edit__caption">Avatar*</p>
        <input
          className="modal__input"
          type="url"
          placeholder="Avatar"
          required
          minLength="13"
          value={avatarInputValue}
          onChange={(e) => {
            setAvatarInputValue(e.target.value);
            setAvatarValidationMessage(e.target.validationMessage);
          }}
        ></input>
        <p className="error-message">{avatarValidationMessage}</p>
      </fieldset>
    </ModalWithForm>
  );
};

export default EditProfileModal;
