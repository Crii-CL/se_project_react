import React, { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";
import "../blocks/LoginModal.css";

export default function LoginModal({
  onClose,
  isModalOpen,
  handleOverlayClick,
  isLoggedIn,
}) {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    function clearInputs() {
      setEmailInputValue("");
      setPasswordInputValue("");
    }

    if (isModalOpen) {
      clearInputs();
    }
  }, [isModalOpen]);

  return (
    <ModalWithForm
      name="login"
      title="Log In"
      buttonText="Log in"
      onClose={onClose}
      isModalOpen={isModalOpen}
      handleSubmit={handleSubmit}
      handleOverlayClick={handleOverlayClick}
    >
      <fieldset className="login">
        <p className="login__caption">Email</p>
        <input
          className="login__input"
          type="text"
          placeholder="Email"
          minLength="1"
          maxLength="20"
          required="true"
          onChange={(e) => {
            setEmailInputValue(e.target.value);
          }}
        ></input>
        <p className="login__caption">Password</p>
        <input
          className="login__input"
          type="text"
          placeholder="Password"
          minLength="1"
          maxLength="20"
          required="true"
          onChange={(e) => {
            setPasswordInputValue(e.target.value);
          }}
        ></input>
      </fieldset>
      <div className="login__register">
        <button className="login__register-button">or Register</button>
      </div>
    </ModalWithForm>
  );
}
