import React from "react";
import "./Main.css";

function Main({
  Weather,
  Cards,
  handleCardClick,
  weatherData,
  defaultClothingItems,
  currentTempUnit,
  handleToggleSwitchChange,
}) {
  return (
    <main className="main">
      <Weather
        day={false}
        type="clear"
        weatherTemp={weatherData}
        currentTempUnit={currentTempUnit}
        handleToggleSwitchChange={handleToggleSwitchChange}
      />
      <section className="cards" id="card-section">
        <ul className="cards__list" id="card-list">
          {defaultClothingItems.map((card) => (
            <Cards
              key={card._id}
              handleCardClick={handleCardClick}
              name={card.name}
              url={card.link}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
