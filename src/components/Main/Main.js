import React from "react";
import Weather from "../Weather/Weather";
import Cards from "../Cards/Cards";
import AddItemModal from "../Modal/AddItemModal/AddItemModal";

import "./Main.css";

function Main({ handleCardClick, weatherData, clothingItems }) {
  console.log(clothingItems);
  console.log("before");
  return (
    <main className="main">
      <Weather day={false} type="clear" weatherTemp={weatherData} />
      <section className="cards" id="card-section">
        <ul className="cards__list" id="card-list">
          {clothingItems.map(
            (card) => (
              <Cards
                key={card.name}
                name={card.name}
                id={card.id}
                url={card.imageUrl}
                handleCardClick={handleCardClick}
              />
            ),
            console.log(clothingItems)
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;
