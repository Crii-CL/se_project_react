import "../blocks/Header.css";
import avatar from "../images/avatar.png";
import logo from "../images/logo.svg";
import React, { useContext, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Header({ openForm, isLoggedIn, name }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const { currentUser } = useContext(CurrentUserContext);
  const [avatarError, setAvatarError] = useState(false);

  console.log({ currentUser });

  const handleAvatarError = (event) => {
    setAvatarError(true);
  };

  return (
    <header className="header">
      <div className="header__container" id="logo-date">
        <NavLink exact to="/">
          <div className="header__logo">
            <img src={logo} alt="wtwr logo"></img>
          </div>
        </NavLink>
        <div className="header__text" id="currentDate">
          {currentDate}, Puerto Rico
        </div>
      </div>
      <div className="header__container" id="button-name-avatar">
        <div className="header__slider"></div>
        <ToggleSwitch name="Temp Switch" />
        <button
          className="header__button"
          type="text"
          id="add-new-clothes"
          onClick={openForm}
        >
          + Add Clothes
        </button>
        <NavLink to="/profile" className="header__name-link">
          <div className="header__name">{currentUser.name}</div>
        </NavLink>
        <NavLink to="/profile">
          <div className="header__avatar">
            {!avatarError ? (
              <img
                className="header__avatar-image"
                src={currentUser.avatar}
                alt="avatar logo"
                onError={handleAvatarError}
              />
            ) : (
              <div className="header__avatar-placeholder">
                <div className="header__avatar-placeholder-letter">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
              </div>
            )}
          </div>
        </NavLink>
      </div>
    </header>
  );
}
