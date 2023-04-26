import React, { useEffect, useState } from "react";
import Weather from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import AddItemModal from "../Modal/AddItemModal/AddItemModal";
import itemsApi from "../../utils/api";

import "./Main.css";

function Main({ handleCardClick, weatherData, clothingItems }) {
  return (
    <main className="main">
      <Weather day={false} type="clear" weatherTemp={weatherData} />
      <section className="cards" id="card-section">
        <ul className="cards__list" id="card-list">
          {clothingItems?.map((card) => (
            <ItemCard
              key={card.id}
              name={card.name}
              url={card.imageUrl}
              id={card.id}
              weather={card.weather}
              handleCardClick={handleCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
