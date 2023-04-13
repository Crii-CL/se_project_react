import _ from "lodash";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Main from "../Main/Main";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import ModalWithForm from "../Modal/ModalWithForm/ModalWithForm";
import ItemModal from "../Modal/ItemModal/ItemModal";
import getWeather from "../../utils/weatherApi";
import { constants, defaultClothingItems } from "../../utils/constants";
import Modal from "../Modal/modal.css";
import fonts from "../../vendor/Fonts/fonts.css";
import "../Modal/ModalWithForm/ModalWithForm.css";
import { children } from "react";

export default function App() {
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [modalData, setModalData] = useState();

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
    setIsItemModalOpen(true);
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
        console.log(res);
      }
    );
  }, []);

  return (
    <>
      <div>
        <Header openForm={openForm} />
        <Main>
          <Weather day={false} type="clear" />
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
            name="clothes"
            title="clothes"
            buttonText="Add Garment"
            onClose={onClose}
            isModalOpen={isFormModalOpen}
            onSubmit={onSubmit}
            handleOverlayClick={handleOverlayClick}
            children={children}
          >
            <fieldset className="formModal__fieldset" id="input-fieldset">
              <p className="formModal__caption">Name</p>
              <input
                className="formModal__input"
                placeholder="Name"
                required
              ></input>
              <p className="formModal__caption">Image</p>
              <input
                className="formModal__input"
                placeholder="Image URL"
                required
              ></input>
            </fieldset>
            <h2 className="formModal__title" id="weather-type">
              Select the weather type
            </h2>
            <fieldset className="formModal__fieldset" id="button-fieldset">
              <label className="formModal__label">
                <input
                  type="radio"
                  className="formModal__input"
                  name="formModal-radio"
                ></input>
                Hot
              </label>
              <label className="formModal__label">
                <input
                  type="radio"
                  className="formModal__input"
                  name="formModal-radio"
                ></input>
                Warm
              </label>
              <label className="formModal__label">
                <input
                  type="radio"
                  className="formModal__input"
                  name="formModal-radio"
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
