import React, { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";
import "../blocks/LoginModal.css";

export default function LoginModal({
  onClose,
  isModalOpen,
  handleOverlayClick,
  isLoggedIn,
}) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <ModalWithForm
      name="login"
      title="Log In"
      buttonText="Log in"
      onClose={onClose}
      isModalOpen={isModalOpen}
      handleSubmit={handleSubmit}
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
        ></input>
        <p className="login__caption">Password</p>
        <input
          className="login__input"
          type="text"
          placeholder="Password"
          minLength="1"
          maxLength="20"
          required="true"
        ></input>
      </fieldset>
    </ModalWithForm>
  );
}
