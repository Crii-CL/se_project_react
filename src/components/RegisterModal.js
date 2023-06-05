import ModalWithForm from "./ModalWithForm";
import "../blocks/RegisterModal.css";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function RegisterModal({
  onClose,
  isModalOpen,
  handleOverlayClick,
}) {
  const loginButton = document.querySelector("register__login-button");

  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [nameInputValue, setNameInputValue] = useState("");
  const [avatarInputValue, setAvatarInputValue] = useState("");

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
  }

  // function

  function handleLoginRedirect() {
    history.push("/signin");
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
          minLength="5"
          maxLength="20"
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
          minLength="5"
          maxLength="20"
          required
          onChange={(e) => {
            setAvatarInputValue(e.target.value);
          }}
          value={avatarInputValue}
        ></input>
      </fieldset>
      <div className="register__login">
        <button
          type="submit"
          className="register__login-button"
          onClick={handleLoginRedirect}
        >
          or Log in
        </button>
      </div>
    </ModalWithForm>
  );
}
