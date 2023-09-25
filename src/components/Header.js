import "../blocks/Header.css";
import avatar from "../images/avatar.png";
import logo from "../images/logo.svg";
import React, { useContext, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";

const Header = ({
  openForm,
  isLoggedIn,
  register,
  login,
  inProfile,
  setInProfile,
}) => {
  const screenWidth = window.innerWidth;

  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );
  setInterval(() => {
    setCurrentDate(
      new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    );
  }, 1000);

  const { currentUser } = useContext(CurrentUserContext);
  const [avatarError, setAvatarError] = useState(false);

  const handleAvatarError = () => {
    setAvatarError(true);
  };

  return (
    <header className="header">
      <div className="header__container" id="logo-date">
        <NavLink exact to="/">
          <div className="header__logo">
            <img
              className="header__logo-image"
              onClick={() => setInProfile(false)}
              src={logo}
              alt="wtwr logo"
            ></img>
          </div>
        </NavLink>
        <div className="header__text" id="currentDate">
          {currentDate}
        </div>
        {/* </div> */}
        {/* <div className="header__container" id="button-name-avatar"> */}
        <div className="header__slider"></div>
        {!inProfile && <ToggleSwitch name="Temp Switch" />}
        {isLoggedIn ? (
          <button
            className="header__button"
            type="text"
            id="add-new-clothes"
            onClick={openForm}
          >
            + Add Clothes
          </button>
        ) : (
          <></>
        )}
        {!isLoggedIn ? (
          <>
            <button className="header__button" onClick={register}>
              Sign Up
            </button>
            <button className="header__button" onClick={login}>
              Sign In
            </button>
          </>
        ) : (
          <></>
        )}
        {isLoggedIn && screenWidth > 400 && (
          <NavLink to="/profile" className="header__link">
            <div onClick={() => setInProfile(true)} className="header__name">
              {currentUser?.name}
            </div>
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/profile" className="header__link">
            <div onClick={() => setInProfile(true)} className="header__avatar">
              {!avatarError ? (
                <img
                  className="header__avatar-image"
                  src={currentUser?.avatar}
                  alt="avatar logo"
                  onError={handleAvatarError}
                />
              ) : (
                <div className="header__avatar-placeholder">
                  <div className="header__avatar-placeholder-container">
                    <div>
                      <p className="header__avatar-placeholder-letter ">
                        {currentUser?.name ? (
                          currentUser?.name.charAt(0).toUpperCase()
                        ) : (
                          <></>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
