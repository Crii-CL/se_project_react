import React, { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";
import "../blocks/LoginModal.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function LoginModal({
  onClose,
  isModalOpen,
  handleOverlayClick,
  login,
}) {
  const history = useHistory();

  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    login(emailInputValue, passwordInputValue);
    history.push("/profile");
  }

  function handleSignupRedirect() {
    history.push("/signup");
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
          type="email"
          placeholder="Email"
          required
          value={emailInputValue}
          onChange={(e) => {
            setEmailInputValue(e.target.value);
          }}
        ></input>
        <p className="login__caption">Password</p>
        <input
          className="login__input"
          type="text"
          placeholder="Password"
          minLength="5"
          maxLength="20"
          required
          value={passwordInputValue}
          onChange={(e) => {
            setPasswordInputValue(e.target.value);
          }}
        ></input>
      </fieldset>
      <div className="login__register">
        <button
          className="login__register-button"
          onClick={handleSignupRedirect}
        >
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
}
