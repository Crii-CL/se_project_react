import ModalWithForm from "./ModalWithForm";
import "../blocks/RegisterModal.css";
import { useState } from "react";
import { useEffect } from "react";

export default function RegisterModal({
  onClose,
  isModalOpen,
  handleOverlayClick,
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
      name="register"
      title="Sign up"
      buttonText="Sign up"
      onClose={onClose}
      isModalOpen={isModalOpen}
      handleSubmit={handleSubmit}
      handleOverlayClick={handleOverlayClick}
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
        ></input>
        <p className="register__caption">Name*</p>
        <input
          className="register__input"
          type="text"
          placeholder="Name"
          minLength="5"
          maxLength="20"
          required
          onChange={(e) => {
            setPasswordInputValue(e.target.value);
          }}
        ></input>
        <p className="register__caption">Avatar URL*</p>
        <input
          className="register__input"
          type="url"
          placeholder="Avatar URL"
          minLength="5"
          maxLength="20"
          required
          onChange={(e) => {
            setPasswordInputValue(e.target.value);
          }}
        ></input>
      </fieldset>
      <div className="register__login">
        <button className="register__login-button">or Log in</button>
      </div>
    </ModalWithForm>
  );
}
