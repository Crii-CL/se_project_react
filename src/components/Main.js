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
  currentTemperatureUnit,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [weatherSort, setWeatherSort] = useState([]);

  const handleWeatherSort = () => {
    if (
      (currentTemperatureUnit === "F" &&
        weatherData.F >= "86°F" &&
        weatherData.F <= "110°F") ||
      (currentTemperatureUnit === "C" &&
        weatherData.C >= "30°C" &&
        weatherData.C <= "43°C")
    ) {
      let hotItems = items.filter((item) => item.weather === "Hot");
      setWeatherSort(hotItems);
    } else if (
      (currentTemperatureUnit === "F" &&
        weatherData.F >= "65°F" &&
        weatherData.F <= "85°F") ||
      (currentTemperatureUnit === "C" &&
        weatherData.C >= "18°C" &&
        weatherData.C <= "29°C")
    ) {
      let warmItems = items.filter((item) => item.weather === "Warm");
      setWeatherSort(warmItems);
    } else if (
      (currentTemperatureUnit === "F" && weatherData.F <= "65°F") ||
      (currentTemperatureUnit === "C" && weatherData.C <= "18°C")
    ) {
      let coldItems = items.filter((item) => item.weather === "Cold");
      setWeatherSort(coldItems);
    } else {
      setWeatherSort(items);
    }
  };

  useEffect(() => {
    handleWeatherSort();
  }, [currentTemperatureUnit, weatherData]);

  return (
    <main className="main">
      <WeatherCard day={false} type="clear" weatherTemp={weatherData} />
      <section className="cards" id="card-section">
        {isLoggedIn && (
          <ul className="cards__list" id="card-list">
            {weatherSort?.map((card) => {
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
