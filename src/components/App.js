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
const itemsApiObject = itemsApi();

export default function App() {
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [weatherData, setWeatherData] = useState("");
  const [currentTemperatureUnit, setCurrentTempUnit] = useState("F");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddItem = (name, url, weatherType) => {
    itemsApiObject
      .add(name, url, weatherType)
      .then((res) => {
        setIsLoading(true);
        setItems([res, ...items]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
        setIsFormModalOpen(false);
      });
  };

  const handleItemDelete = (item) => {
    itemsApiObject
      .remove(item)
      .then(() => {
        const filteredItems = items.filter((card) => card.id !== item);
        setItems(filteredItems);
        setIsConfirmModalOpen(false);
        setIsItemModalOpen(false);
      })
      .catch((error) => {
        console.log(error);
        closeAllPopups();
      });
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
      closeAllPopups();
    }
  };

  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const openForm = () => {
    setIsFormModalOpen(true);
  };

  const closeAllPopups = () => {
    setIsFormModalOpen(false);
    setIsItemModalOpen(false);
    setIsConfirmModalOpen(false);
  };

  const handleConfirmModalClose = () => {
    setIsConfirmModalOpen(false);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTempUnit("C")
      : setCurrentTempUnit("F");
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
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
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
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
            onClose={closeAllPopups}
            itemData={modalData}
            isItemModalOpen={isItemModalOpen}
            isConfirmModalOpen={isConfirmModalOpen}
            handleOverlayClick={handleOverlayClick}
            handleItemDelete={handleItemDelete}
            openConfirmModal={openConfirmModal}
            handleConfirmModalClose={handleConfirmModalClose}
          />
          <AddItemModal
            onClose={closeAllPopups}
            isModalOpen={isFormModalOpen}
            handleOverlayClick={handleOverlayClick}
            onAddItem={handleAddItem}
          />
        </CurrentTemperatureUnitContext.Provider>
      </BrowserRouter>
    </div>
  );
}
