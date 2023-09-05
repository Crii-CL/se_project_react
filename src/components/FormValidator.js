import React, { useEffect, useState } from "react";

function FormValidator({ form, settings, children }) {
  const [inputList, setInputList] = useState([]);
  const [submitButton, setSubmitButton] = useState(null);

  useEffect(() => {
    const formElement = document.querySelector(`#${form}`);
    if (formElement) {
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
    }
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
      inputElement.classList.add(settings.inputErrorClass);
    } else {
      inputElement.classList.remove(settings.inputErrorClass);
    }
  };

  return <div>{children}</div>;
}

export default FormValidator;
