import "./App.css";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import ModalWithForm from "../Modal/ModalWithForm/ModalWithForm";
import ItemModal from "../Modal/ItemModal/ItemModal";
import AddItemModal from "../Modal/AddItemModal/AddItemModal";
import getWeather, {
  parseWeatherData,
  tempUnits,
} from "../../utils/weatherApi";
import itemsApi from "../../utils/api";
import { constants, defaultClothingItems } from "../../utils/constants";
import Modal from "../Modal/modal.css";
import fonts from "../../vendor/Fonts/fonts.css";
import "../Modal/ModalWithForm/ModalWithForm.css";
import { CurrentTempUnitContext } from "../../Contexts/CurrentTempUnitContext";
import { BrowserRouter, Route } from "react-router-dom";
import items from "../../db.json";

export default function App() {
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [weatherData, setWeatherData] = useState("");
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState(items.items);
  // const [clothingItems, setClothingItems] = useState("");

  const addItem = (name, link, id, weatherType) => {
    const newItem = {
      id: clothingItems.length + 1,
      name: name,
      link: link,
      id: id,
      weatherType: weatherType, //to be used in the future
    };

    setClothingItems([newItem, ...clothingItems]);

    console.log(name, link, weatherType);
  };

  const handleItemDelete = (id) => {
    const itemsApiObject = itemsApi();
    itemsApiObject.remove(id);
    setIsConfirmModalOpen(false);
  };

  const handleCardClick = (name, imageuUrl, id) => {
    setIsItemModalOpen(true);
    setModalData({
      name,
      imageuUrl,
      id,
    });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const openForm = () => {
    setIsFormModalOpen(true);
  };

  const onClose = () => {
    setIsFormModalOpen(false);
    setIsItemModalOpen(false);
  };

  const handleConfirmModalClose = () => {
    setIsConfirmModalOpen(false);
  };

  const toggleTempSwitch = () => {
    currentTempUnit === "F" ? setCurrentTempUnit("C") : setCurrentTempUnit("F");
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
  }, []);

  useEffect(() => {
    getWeather(constants.latitude, constants.longitude, constants.apiKey)
      .then((res) => {
        setWeatherData(tempUnits(parseWeatherData(res)));
        console.log(tempUnits(parseWeatherData(res)));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="page">
      <BrowserRouter>
        <CurrentTempUnitContext.Provider
          value={{ currentTempUnit, toggleTempSwitch }}
        >
          <Header openForm={openForm} />
          <Route exact path="/">
            <Main
              handleCardClick={handleCardClick}
              weatherData={weatherData}
              clothingItems={clothingItems}
              itemData={modalData}
            />
          </Route>
          <Route path="/profile">
            <Profile
              handleCardClick={handleCardClick}
              openForm={openForm}
              garments={defaultClothingItems}
            />
          </Route>
          <Footer />
          <ItemModal
            onClose={onClose}
            itemData={modalData}
            isItemModalOpen={isItemModalOpen}
            isConfirmModalOpen={isConfirmModalOpen}
            handleOverlayClick={handleOverlayClick}
            handleItemDelete={handleItemDelete}
            openConfirmModal={openConfirmModal}
            handleConfirmModalClose={handleConfirmModalClose}
          />
          <AddItemModal
            onClose={onClose}
            isModalOpen={isFormModalOpen}
            handleOverlayClick={handleOverlayClick}
            onAddItem={addItem}
          ></AddItemModal>
        </CurrentTempUnitContext.Provider>
      </BrowserRouter>
    </div>
  );
}
