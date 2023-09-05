import React, { useEffect, useState } from "react";

function FormValidator({ settings, form }) {
  const [inputList, setInputList] = useState([]);
  const [submitButton, setSubmitButton] = useState(null);

  useEffect(() => {
    const formElement = document.querySelector(`form[title="${form}"]`);
    const inputElements = [
      ...formElement.querySelectorAll(settings.inputSelector),
    ];
    const submitButtonElement = formElement.querySelector(
      settings.submitButtonSelector
    );

    setInputList(inputElements);
    setSubmitButton(submitButtonElement);

    inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        checkInputValidity(inputElement);
        toggleButtonState();
      });
    });

    toggleButtonState();
  }, [form, settings.inputSelector, settings.submitButtonSelector]);

  const toggleButtonState = () => {
    const isFormValid = checkFormValidity();

    if (!isFormValid) {
      submitButton.classList.add(settings.inactiveButtonClass);
      submitButton.disabled = true;
    } else {
      submitButton.classList.remove(settings.inactiveButtonClass);
      submitButton.disabled = false;
    }
  };

  const checkFormValidity = () =>
    inputList.every((input) => input.validity.valid);

  const checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(inputElement);
    } else {
      hideInputError(inputElement);
    }
  };

  const showInputError = (inputElement) => {
    const errorMessageElement = formElement.querySelector(
      `#${inputElement.id}-error`
    );

    inputElement.classList.add(settings.inputErrorClass);
    errorMessageElement.textContent = inputElement.validationMessage;
    errorMessageElement.classList.add(settings.errorClass);
  };

  const hideInputError = (inputElement) => {
    const errorMessageElement = formElement.querySelector(
      `#${inputElement.id}-error`
    );

    inputElement.classList.remove(settings.inputErrorClass);
    errorMessageElement.textContent = " ";
    errorMessageElement.classList.remove(settings.errorClass);
  };

  return null;
}

export default FormValidator;
