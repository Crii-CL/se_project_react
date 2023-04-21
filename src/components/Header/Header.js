import "./Header.css";
import avatar from "../../images/avatar.png";
import logo from "../../images/logo.svg";
import React, { useState } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { CurrentTempUnitContext } from "../../Contexts/CurrentTempUnitContext";
import { useContext } from "react";

export default function Header({ openForm }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const { toggleTempSwitch } = useContext(CurrentTempUnitContext);

  return (
    <header className="header">
      <div className="header__container" id="logo-date">
        <div className="header__logo">
          <img src={logo} alt="wtwr logo"></img>
        </div>
        <div className="header__text" id="currentDate">
          {currentDate},
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
        <div className="header__name">Cristopher Campos</div>
        <div className="header__avatar">
          <img
            className="header__avatar-image"
            src={avatar}
            alt="avatar logo"
          ></img>
        </div>
      </div>
    </header>
  );
}
