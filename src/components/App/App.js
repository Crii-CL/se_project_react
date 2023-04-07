import logo from "../../../public/images/logo.svg";
import "./App.css";
import ItemModal from "../ItemCard/ItemModal";
import React from "react";

function App() {
  return (
    <div>
      <header className="header">
        <div className="header__logo">wtwr°</div>
        <div className="header__text">date</div>
        <button className="header__button" type="text">
          Add New Clothes
        </button>
        <div className="header__text">Welcome</div>
        <div className="header__text">Cristopher Campos</div>
      </header>
    </div>
  );
}

export default App;
