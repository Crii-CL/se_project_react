import "../../blocks/App.css";
// import ItemModal from "../ItemCard/ItemModal";
import React from "react";

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
            <img className="header__avatar-image"></img>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
