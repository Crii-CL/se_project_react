import _ from "lodash";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Main from "../Main/Main";
import ItemCard from "../ItemCard/ItemCard";
import Footer from "../Footer/Footer";
import React, { useState } from "react";
import font from "../../vendor/Fonts/fonts.css";
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

function App() {
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
          <Weather day={false} type="sunny" />
          <section className="cards" id="card-section">
            <ul className="cards__list" id="card-list">
              {cardImagesArray.map((card, index) => (
                <ItemCard
                  key={_.uniqueId(card.name)}
                  handleCardClick={handleCardClick}
                  name={card.name}
                  url={card.url}
                />
              ))}
            </ul>
          </section>
        </Main>
        <Footer />
        {/* {isModalOpen && (
          //Modal here
        )} */}
      </div>
    </>
  );
}

export default App;
