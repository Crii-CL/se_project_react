import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import "../blocks/Main.css";

function Main({ handleCardClick, weatherData, clothingItems, isLoggedIn }) {
  return (
    <main className="main">
      <WeatherCard day={false} type="clear" weatherTemp={weatherData} />
      {!isLoggedIn && (
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
      )}
    </main>
  );
}

export default Main;
