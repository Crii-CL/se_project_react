import "../../blocks/App.css";
import logo from "../../images/logo.svg";
// import ItemModal from "../ItemCard/ItemModal";
import React from "react";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function App() {
  return (
    <>
      <div>
        <header className="header">
          <div className="header__logo">wtwr°</div>
          <div className="header__text">date</div>
          <button className="header__button" type="text">
            Add New Clothes
          </button>
          <div className="header__text">Welcome</div>
          <div className="header__name">Cristopher Campos</div>
          <div className="header__avatar">
            <img
              className="header__avatar-image"
              src="{logo}"
              alt="avatar logo"
            ></img>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
