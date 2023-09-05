// import React, { useEffect, useState, useRef } from "react";
// import ModalWithForm from "./ModalWithForm";
// import "../blocks/LoginModal.css";
// import "../blocks/modal.css";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// const LoginModal = ({
//   onClose,
//   isModalOpen,
//   handleOverlayClick,
//   login,
//   handleLoginModal,
//   handleRegisterModal,
//   checkInputValidity,
//   error,
//   errMessage,
// }) => {
//   const history = useHistory();

//   const [emailInputValue, setEmailInputValue] = useState("");
//   const [passwordInputValue, setPasswordInputValue] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     login(emailInputValue, passwordInputValue);
//     history.push("/profile");
//   }

//   function switchToRegister() {
//     handleLoginModal(false);
//     handleRegisterModal(true);
//   }

//   useEffect(() => {
//     function clearInputs() {
//       setEmailInputValue("");
//       setPasswordInputValue("");
//     }

//     if (isModalOpen) {
//       clearInputs();
//     }
//   }, [isModalOpen]);

//   // useEffect(() => {
//   //   checkInputValidity();
//   // }, [emailInputValue, passwordInputValue]);

//   return (
//     <ModalWithForm
//       name="login"
//       title="Log In"
//       buttonText="Log in"
//       onClose={onClose}
//       isModalOpen={isModalOpen}
//       handleSubmit={handleSubmit}
//       handleOverlayClick={handleOverlayClick}
//     >
//       <fieldset className="login">
//         <p className="login__caption">Email</p>
//         <input
//           className="login__input"
//           type="email"
//           placeholder="Email"
//           required
//           value={emailInputValue}
//           onChange={(e) => {
//             setEmailInputValue(e.target.value);
//             checkInputValidity();
//           }}
//         ></input>
//         <span id="email" className={`errorMessage ${error ? "" : "hidden"}`}>
//           {`${errMessage !== "" ? errMessage : "Enter e-mail address"}`}
//         </span>
//         <p className="login__caption">Password</p>
//         <input
//           className="login__input"
//           type="text"
//           placeholder="Password"
//           minLength="5"
//           maxLength="20"
//           required
//           value={passwordInputValue}
//           onChange={(e) => {
//             setPasswordInputValue(e.target.value);
//             checkInputValidity();
//           }}
//         ></input>
//         <span className={`errorMessage ${error ? "" : "hidden"}`}>
//           {`${
//             errMessage !== ""
//               ? errMessage
//               : "Enter a password composed of more than 5 characters"
//           }`}
//         </span>
//       </fieldset>
//       <div className="login__register">
//         <button className="login__register-button" onClick={switchToRegister}>
//           or Register
//         </button>
//       </div>
//     </ModalWithForm>
//   );
// };

// export default LoginModal;

import React, { useEffect, useState, useRef } from "react";
import ModalWithForm from "./ModalWithForm";
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
  checkInputValidity,
  error,
  errMessage,
}) => {
  const history = useHistory();

  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    login(emailInputValue, passwordInputValue);
    history.push("/profile");
  }

  function switchToRegister() {
    handleLoginModal(false);
    handleRegisterModal(true);
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

  // useEffect(() => {
  //   checkInputValidity();
  // }, [emailInputValue, passwordInputValue]);

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
            checkInputValidity();
          }}
        ></input>
        <span id="email" className={`errorMessage ${error ? "" : "hidden"}`}>
          {`${errMessage !== "" ? errMessage : "Enter e-mail address"}`}
        </span>
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
            checkInputValidity();
          }}
        ></input>
        <span className={`errorMessage ${error ? "" : "hidden"}`}>
          {`${
            errMessage !== ""
              ? errMessage
              : "Enter a password composed of more than 5 characters"
          }`}
        </span>
      </fieldset>
      <div className="login__register">
        <button className="login__register-button" onClick={switchToRegister}>
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
