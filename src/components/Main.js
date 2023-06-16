import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import "../blocks/Main.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

export default function Main({
  handleCardClick,
  weatherData,
  clothingItems,
  isLoggedIn,
  items,
  setItems,
  itemsApiObject,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <main className="main">
      <WeatherCard day={false} type="clear" weatherTemp={weatherData} />
      <section className="cards" id="card-section">
        {isLoggedIn && (
          <ul className="cards__list" id="card-list">
            {clothingItems?.map((card) => {
              return (
                <ItemCard
                  key={card?._id}
                  name={card?.name}
                  url={card?.imageUrl}
                  id={card?.id}
                  weather={card?.weather}
                  handleCardClick={handleCardClick}
                  isLoggedIn={isLoggedIn}
                  card={card}
                  owner={card?.owner}
                  user={currentUser?._id}
                  items={items}
                  setItems={setItems}
                  itemsApiObject={itemsApiObject}
                />
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}
