import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import "../blocks/Main.css";
import { v4 as uuidv4 } from "uuid";

function Main({
  handleCardClick,
  weatherData,
  clothingItems,
  handleLikeClick,
  isLoggedIn,
  isLiked,
}) {
  const uniqueId = uuidv4();
  return (
    <main className="main">
      <WeatherCard day={false} type="clear" weatherTemp={weatherData} />
      <section className="cards" id="card-section">
        <ul className="cards__list" id="card-list">
          {clothingItems?.map((card) => {
            return (
              <ItemCard
                key={uniqueId}
                name={card.name}
                url={card.imageUrl}
                id={card.id}
                weather={card.weather}
                isLiked={isLiked}
                handleCardClick={handleCardClick}
                handleLikeClick={handleLikeClick}
                isLoggedIn={isLoggedIn}
                card={card}
                owner={card.owner}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
