import React from "react";
import ModalWithForm from "./ModalWithForm";
import "../blocks/modal.css";
import "../blocks/EditProfileModal.css";
import { useState, useEffect } from "react";

export default function EditProfileModal({
  onClose,
  isModalOpen,
  handleOverlayClick,
}) {
  const [nameInputValue, setNameInputValue] = useState("");
  const [avatarInputValue, setAvatarInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // editProfile(nameInputValue, avatarInputValue);
    onClose();
  }

  useEffect(() => {
    function clearInputs() {
      setNameInputValue(nameInputValue);
      setAvatarInputValue(avatarInputValue);
    }
  }, [isModalOpen]);

  return (
    <ModalWithForm
      name="edit-profile"
      title="Change Profile Data"
      buttonText="Save Changes"
      onClose={onClose}
      isModalOpen={isModalOpen}
      handleSubmit={handleSubmit}
      handleOverlayClick={handleOverlayClick}
    >
      <fieldset className="edit">
        <p className="edit__caption">Name*</p>
        <input
          className="edit__input"
          type="text"
          placeholder="Name"
          required
          value={nameInputValue}
          onChange={(e) => {
            setNameInputValue(e.target.value);
          }}
        ></input>
        <p className="edit__caption">Avatar*</p>
        <input
          className="edit__input"
          type="url"
          placeholder="Avatar"
          required
          value={avatarInputValue}
          onChange={(e) => {
            setAvatarInputValue(e.target.value);
          }}
        ></input>
      </fieldset>
    </ModalWithForm>
  );
}
