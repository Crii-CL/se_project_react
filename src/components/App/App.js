import _ from "lodash";
import fonts from "../../vendor/Fonts/fonts.css";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Main from "../Main/Main";
import Cards from "../Cards/Cards";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import React, { useState } from "react";
import cap from "../../images/Cap.svg";
import shorts from "../../images/Shorts.svg";
import sneakers from "../../images/Sneakers 1.svg";
import tshirt from "../../images/T-Shirt.svg";

const cardImagesArray = [
  { url: cap, name: "Cap" },
  { url: shorts, name: "Shorts" },
  { url: sneakers, name: "Sneakers" },
  { url: tshirt, name: "T-Shirt" },
];

export { cardImagesArray };

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState();

  const handleCardClick = (name, url) => {
    setIsModalOpen(true);
    setModalData({
      name,
      url,
    });
  };

  return (
    <>
      <div>
        <Header />
        <Main>
          <Weather day={false} type="clear" />
          <section className="cards" id="card-section">
            <ul className="cards__list" id="card-list">
              {cardImagesArray.map((card, index) => (
                <Cards
                  key={_.uniqueId(card.name)}
                  handleCardClick={handleCardClick}
                  name={card.name}
                  url={card.url}
                />
              ))}
            </ul>
          </section>
          <ItemModal itemData={modalData} />
        </Main>
        <Footer />
      </div>
    </>
  );
}
