import React, { useContext } from "react";
import ModalWithForm from "./ModalWithForm";
import "../blocks/modal.css";
import "../blocks/EditProfileModal.css";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";

const EditProfileModal = ({
  onClose,
  isModalOpen,
  handleOverlayClick,
  editProfile,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [nameInputValue, setNameInputValue] = useState("");
  const [avatarInputValue, setAvatarInputValue] = useState("");

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
    >
      <fieldset className="edit">
        <p className="edit__caption">Name*</p>
        <input
          className="edit__input"
          type="text"
          placeholder="Name"
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
          value={avatarInputValue}
          onChange={(e) => {
            setAvatarInputValue(e.target.value);
          }}
        ></input>
      </fieldset>
    </ModalWithForm>
  );
};

export default EditProfileModal;
