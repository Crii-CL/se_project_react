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
import { constants } from "../../utils/constants";
import Modal from "../Modal/modal.css";
import fonts from "../../vendor/Fonts/fonts.css";
import "../Modal/ModalWithForm/ModalWithForm.css";
import { CurrentTempUnitContext } from "../../Contexts/CurrentTempUnitContext";
import { BrowserRouter, Route } from "react-router-dom";
import mockDb from "../../dbs.json";
// https://my-json-server.typicode.com/crii-cl/se_project_react/db

export default function App() {
  const itemsApiObject = itemsApi();
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [weatherData, setWeatherData] = useState("");
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  // const [clothingItems, setClothingItems] = useState(itemsApiObject.get());
  const [clothingItems, setClothingItems] = useState(mockDb.items);

  const addItem = (name, link, id, weatherType) => {
    const newItem = {
      id: clothingItems.length,
      name: name,
      weather: weatherType,
      imageUrl: link,
    };

    setClothingItems([newItem, ...clothingItems]);
    console.log("items below");
    console.log(clothingItems);
  };

  const handleItemDelete = (id) => {
    itemsApiObject.remove(id);
    setIsConfirmModalOpen(false);
  };

  const handleCardClick = (name, url, id) => {
    setIsItemModalOpen(true);
    setModalData({
      name,
      url,
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
      })
      .catch((error) => {
        console.log(error);
      });
    itemsApiObject.get().then((res) => {
      console.log("----------");
      console.log(res);
    }); // receive items
  }, []);

  // return null;

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
              garments={clothingItems}
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
