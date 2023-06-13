import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import "../blocks/Main.css";
import { v4 as uuidv4 } from "uuid";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

export default function Main({
  handleCardClick,
  weatherData,
  clothingItems,
  handleLikeClick,
  isLoggedIn,
  isLiked,
}) {
  const currentUser = useContext(CurrentUserContext);
  const uniqueId = uuidv4();
  return (
    <main className="main">
      <WeatherCard day={false} type="clear" weatherTemp={weatherData} />
      <section className="cards" id="card-section">
        {isLoggedIn && (
          <ul className="cards__list" id="card-list">
            {clothingItems?.map((card) => {
              // console.log(card);
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
                  user={currentUser?.currentUser?._id}
                />
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}
