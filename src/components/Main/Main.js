import React from "react";
import Weather from "../Weather/Weather";
import Cards from "../Cards/Cards";
import AddItemModal from "../Modal/AddItemModal/AddItemModal";

import "./Main.css";

function Main({ handleCardClick, weatherData, items }) {
  return (
    <main className="main">
      <Weather day={false} type="clear" weatherTemp={weatherData} />
      <section className="cards" id="card-section">
        <ul className="cards__list" id="card-list">
          {items.map((card) => (
            <Cards
              key={card.name}
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
