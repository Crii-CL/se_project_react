import React, { useContext } from "react";
import Weather from "../Weather/Weather";
import Cards from "../Cards/Cards";
import "./Main.css";
import { CurrentTempUnitContext } from "../../Contexts/CurrentTempUnitContext";

function Main({ handleCardClick, weatherData, defaultClothingItems }) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);
  return (
    <main className="main">
      <Weather day={false} type="clear" weatherTemp={weatherData} />
      <section className="cards" id="card-section">
        <ul className="cards__list" id="card-list">
          {defaultClothingItems.map((card) => (
            <Cards
              key={card._id}
              handleCardClick={handleCardClick}
              name={card.name}
              url={card.link}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
