import "../../blocks/App.css";
import avatar from "../../images/avatar.png";
import logo from "../../images/logo.svg";
// import ItemModal from "../ItemCard/ItemModal";
import React from "react";
import { useEffect } from "react";

// const currentDateEl = document.getElementById('currentDate');
// currentDateEl.innerHTML = currentDate;

function App() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const currentDateElement = document.createElement("div");
    currentDateElement.id = "current-date";
    currentDateElement.innerHTML = currentDate;

    return () => {
      document.body.removeChild(currentDateElement);
    };
  }, [currentDate]);

  return (
    <>
      <div>
        <header className="header">
          <div className="header__container" id="logo-date">
            <div className="header__logo">
              <img src={logo} alt="wtwr logo"></img>
            </div>
            <div className="header__text" id="currentDate">
              {currentDate}
            </div>
          </div>
          <div className="header__container" id="button-name-avatar">
            <button className="header__button" type="text">
              + Add New Clothes
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
      </div>
    </>
  );
}

export default App;
