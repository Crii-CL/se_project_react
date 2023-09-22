import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/Main.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

const Main = ({
  handleCardClick,
  weatherData,
  isLoggedIn,
  items,
  setItems,
  itemsApiObject,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [weatherSort, setWeatherSort] = useState(items);
  let sortedItems = weatherSort;

  useEffect(() => {
    sortedItems = [...items].sort((a, b) => {
      if (a.weather === "Hot" && b.weather !== "Hot") return -1;
      if (a.weather !== "Hot" && b.weather === "Hot") return 1;
      if (a.weather === "Warm" && b.weather === "Cold") return -1;
      if (a.weather === "Cold" && b.weather === "Warm") return 1;
      return 0;
    });

    setWeatherSort(sortedItems);
  }, [items]);

  return (
    <main className="main">
      <WeatherCard day={false} type="clear" weatherTemp={weatherData} />
      <section className="cards" id="card-section">
        {isLoggedIn && (
          <ul className="cards__list" id="card-list">
            {sortedItems?.map((card) => {
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
};
export default Main;
