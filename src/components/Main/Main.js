import React, { useEffect, useState } from "react";
import Weather from "../Weather/Weather";
import Cards from "../Cards/Cards";
import AddItemModal from "../Modal/AddItemModal/AddItemModal";
import itemsApi from "../../utils/api";

import "./Main.css";

function Main({ handleCardClick, weatherData, clothingItems }) {
  const itemsApiObject = itemsApi();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    itemsApiObject
      .get()
      .then((res) => {
        setCards(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="main">
      <Weather day={false} type="clear" weatherTemp={weatherData} />
      <section className="cards" id="card-section">
        <ul className="cards__list" id="card-list">
          {cards?.map((card) => (
            <Cards
              key={card.id}
              name={card.name}
              id={card.id}
              url={card.imageUrl}
              handleCardClick={handleCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
