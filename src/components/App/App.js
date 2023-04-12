import _ from "lodash";
import fonts from "../../vendor/Fonts/fonts.css";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Main from "../Main/Main";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Modal from "../../utils/modal.css";
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

  const handleClose = () => {
    setIsFormModalOpen(false);
    setIsItemModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        <Header />
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
            handleClose={handleClose}
            itemData={modalData}
            isItemModalOpen={isItemModalOpen}
            handleOverlayClick={handleOverlayClick}
          />
          <ModalWithForm
            handleClose={handleClose}
            isFormModalOpen={isFormModalOpen}
            handleSubmit={handleSubmit}
            handleOverlayClick={handleOverlayClick}
          />
        </Main>
        <Footer />
      </div>
    </>
  );
}
