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
  error,
  setError,
  toggleSubmit,
  setToggleSubmit,
}) => {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [nameInputValue, setNameInputValue] = useState("");
  const [avatarInputValue, setAvatarInputValue] = useState("");

  const [emailValidationMessage, setEmailValidationMessage] = useState("");
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState("");
  const [nameValidationMessage, setNameValidationMessage] = useState("");
  const [avatarValidationMessage, setAvatarValidationMessage] = useState("");

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

  function clearInputs() {
    setEmailInputValue("");
    setPasswordInputValue("");
    setNameInputValue("");
    setAvatarInputValue("");
  }
  useEffect(() => {
    if (isModalOpen) {
      clearInputs();
    }
  }, [isModalOpen]);

  return (
    <ModalWithForm
      name="register"
      title="Sign up"
      buttonText="Next"
      onClose={onClose}
      isModalOpen={isModalOpen}
      handleOverlayClick={handleOverlayClick}
      handleSubmit={handleSubmit}
      error={error}
      setError={setError}
      toggleSubmit={toggleSubmit}
      setToggleSubmit={setToggleSubmit}
    >
      <fieldset className="register">
        <p className="register__caption">Email*</p>
        <input
          className="modal__input"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => {
            setEmailInputValue(e.target.value);
            setEmailValidationMessage(e.target.validationMessage);
          }}
          value={emailInputValue}
        ></input>
        <span className="error-message">{emailValidationMessage}</span>
        <p className="register__caption">Password*</p>
        <input
          className="modal__input"
          type="text"
          placeholder="Password"
          minLength="5"
          maxLength="20"
          required
          onChange={(e) => {
            setPasswordInputValue(e.target.value);
            setPasswordValidationMessage(e.target.validationMessage);
          }}
          value={passwordInputValue}
        ></input>
        <span className="error-message">{passwordValidationMessage}</span>
        <p className="register__caption">Name*</p>
        <input
          className="modal__input"
          type="text"
          placeholder="Name"
          required
          onChange={(e) => {
            setNameInputValue(e.target.value);
            setNameValidationMessage(e.target.validationMessage);
          }}
          value={nameInputValue}
        ></input>
        <span className="error-message">{nameValidationMessage}</span>
        <p className="register__caption">Avatar URL*</p>
        <input
          className="modal__input"
          type="url"
          placeholder="Avatar URL"
          required
          onChange={(e) => {
            setAvatarInputValue(e.target.value);
            setAvatarValidationMessage(e.target.validationMessage);
          }}
          value={avatarInputValue}
        ></input>
        <span className="error-message">{avatarValidationMessage}</span>
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
