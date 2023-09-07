import React, { useState, useEffect } from "react";
import ModalWithForm from "./ModalWithForm";
import FormValidator from "./FormValidator";
import "../blocks/LoginModal.css";
import "../blocks/modal.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LoginModal = ({
  onClose,
  isModalOpen,
  handleOverlayClick,
  login,
  handleLoginModal,
  handleRegisterModal,
  error,
  setError,
  toggleSubmit,
  setToggleSubmit,
}) => {
  const history = useHistory();

  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [emailValidationMessage, setEmailValidationMessage] = useState("");
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState("");

  function handleSubmit(e) {
    e.preventDefault();
    login(emailInputValue, passwordInputValue);
    history.push("/profile");
  }

  function switchToRegister() {
    handleLoginModal(false);
    handleRegisterModal(true);
  }

  function clearInputs() {
    setEmailInputValue("");
    setPasswordInputValue("");
  }

  useEffect(() => {
    if (isModalOpen) {
      clearInputs();
    }
  }, [isModalOpen]);

  return (
    <ModalWithForm
      id="login"
      name="login"
      title="Log In"
      buttonText="Log in"
      onClose={onClose}
      isModalOpen={isModalOpen}
      handleSubmit={handleSubmit}
      handleOverlayClick={handleOverlayClick}
      error={error}
      setError={setError}
      toggleSubmit={toggleSubmit}
      setToggleSubmit={setToggleSubmit}
    >
      {/* <FormValidator
        settings={{
          inputSelector: ".modal__input",
          submitButtonSelector: ".modal__submit_login",
          inactiveButtonClass: "inactive",
          inputErrorClass: "error",
        }}
      > */}
      <fieldset className="login">
        <p className="login__caption">Email</p>
        <input
          className="modal__input"
          type="email"
          placeholder="Email"
          required
          value={emailInputValue}
          onChange={(e) => {
            setEmailInputValue(e.target.value);
            setEmailValidationMessage(e.target.validationMessage);
          }}
        ></input>
        <span
          className={`error-message ${
            emailValidationMessage === "" ? "hidden" : ""
          }`}
        >{`${
          emailValidationMessage === "" ? "a" : emailValidationMessage
        }`}</span>
        <p className="login__caption">Password</p>
        <input
          className="modal__input"
          type="password"
          placeholder="Password"
          minLength="5"
          maxLength="20"
          required
          value={passwordInputValue}
          onChange={(e) => {
            setPasswordInputValue(e.target.value);
            setPasswordValidationMessage(e.target.validationMessage);
          }}
        ></input>
        <span
          className={`error-message ${
            passwordValidationMessage === "" ? "hidden" : ""
          }`}
        >{`${
          passwordValidationMessage === "" ? "a" : passwordValidationMessage
        }`}</span>
      </fieldset>
      {/* </FormValidator> */}
      <div className="login__register">
        <button className="login__register-button" onClick={switchToRegister}>
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
