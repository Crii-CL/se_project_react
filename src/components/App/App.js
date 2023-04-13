import _ from "lodash";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Main from "../Main/Main";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import ModalWithForm from "../Modal/ModalWithForm/ModalWithForm";
import ItemModal from "../Modal/ItemModal/ItemModal";
import getWeather, { parseWeatherData } from "../../utils/weatherApi";
import { constants, defaultClothingItems } from "../../utils/constants";
import Modal from "../Modal/modal.css";
import fonts from "../../vendor/Fonts/fonts.css";
import "../Modal/ModalWithForm/ModalWithForm.css";

export default function App() {
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [modalData, setModalData] = useState();
  const [weatherData, setWeatherData] = useState();

  const handleCardClick = (name, url) => {
    setIsItemModalOpen(true);
    setModalData({
      name,
      url,
    });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsFormModalOpen(false);
      setIsItemModalOpen(false);
    }
  };

  const openForm = () => {
    setIsFormModalOpen(true);
  };

  const onClose = () => {
    setIsFormModalOpen(false);
    setIsItemModalOpen(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    getWeather(constants.latitude, constants.longitude, constants.apiKey).then(
      (res) => {
        setWeatherData(parseWeatherData(res) + "°F");
      }
    );
  }, []);

  return (
    <>
      <div>
        <Header openForm={openForm} />
        <Main>
          <Weather day={false} type="clear" weatherTemp={weatherData} />
          <section className="cards" id="card-section">
            <ul className="cards__list" id="card-list">
              {defaultClothingItems.map((card) => (
                <Cards
                  key={_.uniqueId(card.name)}
                  handleCardClick={handleCardClick}
                  name={card.name}
                  url={card.link}
                />
              ))}
            </ul>
          </section>
          <ItemModal
            onClose={onClose}
            itemData={modalData}
            isModalOpen={isItemModalOpen}
            handleOverlayClick={handleOverlayClick}
          />
          <ModalWithForm
            name="garments"
            title="New Garments:"
            buttonText="Add Garment"
            onClose={onClose}
            isModalOpen={isFormModalOpen}
            onSubmit={onSubmit}
            handleOverlayClick={handleOverlayClick}
          >
            <fieldset className="formModal__fieldset" id="input-fieldset">
              <p className="formModal__caption">Name</p>
              <input
                type="text"
                className="formModal__input"
                placeholder="Name"
                minLength="1"
                maxLength="30"
                required
              ></input>
              <p className="formModal__caption">Image</p>
              <input
                type="url"
                className="formModal__input"
                placeholder="Image URL"
                minLength="1"
                maxLength="30"
                required
              ></input>
            </fieldset>
            <h3 className="formModal__title" id="weather-type-title[\">
              Select the weather type:
            </h3>
            <fieldset
              className="formModal__fieldset"
              id="radio-button-fieldset"
            >
              <label className="formModal__label">
                <input
                  type="radio"
                  className="formModal__input"
                  name="hot"
                  value="hot"
                ></input>
                Hot
              </label>
              <label className="formModal__label">
                <input
                  type="radio"
                  className="formModal__input"
                  name="warm"
                  value="warm"
                ></input>
                Warm
              </label>
              <label className="formModal__label">
                <input
                  type="radio"
                  className="formModal__input"
                  name="cold"
                  value="cold"
                ></input>
                Cold
              </label>
            </fieldset>
          </ModalWithForm>
        </Main>
        <Footer />
      </div>
    </>
  );
}
