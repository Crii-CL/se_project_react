import "./Header.css";
import avatar from "../../images/avatar.png";
import logo from "../../images/logo.svg";
import { useEffect } from "react";

export default function Header() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const currentDateElement = document.createElement("div");
    currentDateElement.id = "current-date";
    currentDateElement.innerHTML = currentDate;
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
            {/* header__button opens card modal */}
            <button className="header__button" type="text" id="add-new-clothes">
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
