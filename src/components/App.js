import "../blocks/App.css";
import Header from "./Header";
import Profile from "./Profile";
import Main from "./Main";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import ItemModal from "./ItemModal";
import AddItemModal from "./AddItemModal";
import getWeather, { parseWeatherData, tempUnits } from "../utils/weatherApi";
import itemsApi from "../utils/api";
import { constants } from "../utils/constants";
import Modal from "../blocks/modal.css";
import fonts from "../vendor/Fonts/fonts.css";
import "../blocks/ModalWithForm.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { BrowserRouter, Route } from "react-router-dom";

export default function App() {
  const itemsApiObject = itemsApi();
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [weatherData, setWeatherData] = useState("");
  const [currentTemperatureUnit, setCurrentTempUnit] = useState("F");
  const [items, setItems] = useState([]);

  const handleAddItem = (name, url, weatherType) => {
    itemsApiObject.add(name, url, weatherType).then((res) => {
      setItems([res, ...items]);
    });
  };

  const handleItemDelete = () => {
    itemsApiObject.remove();
    setIsConfirmModalOpen(false);
    setIsItemModalOpen(false);
  };

  const handleCardClick = (name, url, weather, id) => {
    setIsItemModalOpen(true);
    setModalData({
      name,
      url,
      weather,
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
    currentTemperatureUnit === "F"
      ? setCurrentTempUnit("C")
      : setCurrentTempUnit("F");
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
  }, []);

  useEffect(() => {
    itemsApiObject
      .get()
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="page">
      <BrowserRouter>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, toggleTempSwitch }}
        >
          <Header openForm={openForm} />
          <Route exact path="/">
            <Main
              handleCardClick={handleCardClick}
              weatherData={weatherData}
              clothingItems={items}
            />
          </Route>
          <Route path="/profile">
            <Profile
              handleCardClick={handleCardClick}
              openForm={openForm}
              clothingItems={items}
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
            onAddItem={handleAddItem}
          ></AddItemModal>
        </CurrentTemperatureUnitContext.Provider>
      </BrowserRouter>
    </div>
  );
}
