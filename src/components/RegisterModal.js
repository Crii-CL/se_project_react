import ModalWithForm from "./ModalWithForm";
import "../blocks/RegisterModal.css";
import "../blocks/modal.css";
import { useState } from "react";
import { useEffect } from "react";

const RegisterModal = ({
  onClose,
  isModalOpen,
  handleOverlayClick,
  signup,
  handleRegisterModal,
  handleLoginModal,
  checkInputValidity,
}) => {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [nameInputValue, setNameInputValue] = useState("");
  const [avatarInputValue, setAvatarInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    signup(
      emailInputValue,
      passwordInputValue,
      nameInputValue,
      avatarInputValue
    );
  }

  function switchToLogin() {
    handleRegisterModal(false);
    handleLoginModal(true);
  }

  useEffect(() => {
    function clearInputs() {
      setEmailInputValue("");
      setPasswordInputValue("");
      setNameInputValue("");
      setAvatarInputValue("");
    }

    if (isModalOpen) {
      clearInputs();
    }
  }, [isModalOpen]);

  useEffect(() => {
    checkInputValidity();
  }, [emailInputValue, passwordInputValue, nameInputValue, avatarInputValue]);

  return (
    <ModalWithForm
      name="register"
      title="Sign up"
      buttonText="Next"
      onClose={onClose}
      isModalOpen={isModalOpen}
      handleOverlayClick={handleOverlayClick}
      handleSubmit={handleSubmit}
    >
      <fieldset className="register">
        <p className="register__caption">Email*</p>
        <input
          className="register__input"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => {
            setEmailInputValue(e.target.value);
          }}
          value={emailInputValue}
        ></input>
        <p className="register__caption">Password*</p>
        <input
          className="register__input"
          type="text"
          placeholder="Password"
          minLength="5"
          maxLength="20"
          required
          onChange={(e) => {
            setPasswordInputValue(e.target.value);
          }}
          value={passwordInputValue}
        ></input>
        <p className="register__caption">Name*</p>
        <input
          className="register__input"
          type="text"
          placeholder="Name"
          required
          onChange={(e) => {
            setNameInputValue(e.target.value);
          }}
          value={nameInputValue}
        ></input>
        <p className="register__caption">Avatar URL*</p>
        <input
          className="register__input"
          type="url"
          placeholder="Avatar URL"
          required
          onChange={(e) => {
            setAvatarInputValue(e.target.value);
          }}
          value={avatarInputValue}
        ></input>
      </fieldset>
      <div className="register__login">
        <button className="register__login-button" onClick={switchToLogin}>
          or Log in
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
