import React, { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";

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
      name="login-modal"
      title="Log In"
      buttonText="Log in"
      onClose={onClose}
      isModalOpen={isModalOpen}
      handleSubmit={handleSubmit}
    >
      <fieldset className="login">
        <h1 className="login__title"></h1>
      </fieldset>
    </ModalWithForm>
  );
}
