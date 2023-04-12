import _ from "lodash";
import fonts from "../../vendor/Fonts/fonts.css";
import Modal from "../../utils/modal.css";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Main from "../Main/Main";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import getWeather from "../../utils/weatherApi";
import { constants, defaultClothingItems } from "../../utils/constants";

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
  };

  const onClose = () => {
    setIsFormModalOpen(false);
    setIsItemModalOpen(false);
  };

  const handleSubmit = (e) => {
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
            onClose={onClose}
            isModalOpen={isFormModalOpen}
            handleSubmit={handleSubmit}
            handleOverlayClick={handleOverlayClick}
          />
        </Main>
        <Footer />
      </div>
    </>
  );
}
