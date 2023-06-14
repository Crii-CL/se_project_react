import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import "../blocks/Main.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";
import disliked from "../images/likeButton.svg";
import liked from "../images/like_active.svg";

export default function Main({
  handleLikeClick,
  handleCardClick,
  weatherData,
  clothingItems,
  isLoggedIn,
  isLiked,
  checkLikes,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <WeatherCard day={false} type="clear" weatherTemp={weatherData} />
      <section className="cards" id="card-section">
        {isLoggedIn && (
          <ul className="cards__list" id="card-list">
            {clothingItems?.map((card) => {
              const image = isLiked ? liked : disliked;
              return (
                <ItemCard
                  key={card?._id}
                  name={card?.name}
                  url={card?.imageUrl}
                  id={card?._id}
                  weather={card?.weather}
                  isLiked={isLiked}
                  handleCardClick={handleCardClick}
                  handleLikeClick={handleLikeClick}
                  isLoggedIn={isLoggedIn}
                  card={card}
                  owner={card?.owner}
                  user={currentUser?.currentUser?._id}
                  image={image}
                />
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}
