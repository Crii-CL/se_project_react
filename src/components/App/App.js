import _ from "lodash";
import fonts from "../../vendor/Fonts/fonts.css";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Main from "../Main/Main";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import React, { useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Modal from "../../utils/modal.css";
/* ------------------------------ Item Imports ------------------------------ */
import cap from "../../images/Cap.svg";
import shorts from "../../images/Shorts.svg";
import sneakers from "../../images/Sneakers 1.svg";
import tshirt from "../../images/T-Shirt.svg";
/* ----------------------------- ^Item Imports^ ----------------------------- */

const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
            itemData={modalData}
            isItemModalOpen={isItemModalOpen}
            handleOverlayClick={handleOverlayClick}
          />
          <ModalWithForm
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
