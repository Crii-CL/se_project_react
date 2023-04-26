import "./Header.css";
import avatar from "../../images/avatar.png";
import logo from "../../images/logo.svg";
import React from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Header({ openForm }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

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
          <div className="header__name">Cristopher Campos</div>
        </NavLink>
        <NavLink to="/profile">
          <div className="header__avatar">
            <img
              className="header__avatar-image"
              src={avatar}
              alt="avatar logo"
            ></img>
          </div>
        </NavLink>
      </div>
    </header>
  );
}
