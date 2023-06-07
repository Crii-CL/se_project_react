import "../blocks/App.css";
import Header from "./Header";
import Profile from "./Profile";
import Main from "./Main";
import Footer from "./Footer";
import React, { useEffect, useState, useHistory } from "react";
import ItemModal from "./ItemModal";
import AddItemModal from "./AddItemModal";
import getWeather, { parseWeatherData, tempUnits } from "../utils/weatherApi";
import itemsApi from "../utils/ItemsApi";
import SignupOrSignin from "../utils/auth";
import ProtectedRoute from "./ProtectedRoute";
import { constants } from "../utils/constants";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Modal from "../blocks/modal.css";
import fonts from "../vendor/Fonts/fonts.css";
import "../blocks/AddItemModal.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
const token = localStorage.getItem("jwt");
const itemsApiObject = itemsApi();
const UserApi = SignupOrSignin();

export default function App() {
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); //
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); //
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); //
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [weatherData, setWeatherData] = useState("");
  const [currentTemperatureUnit, setCurrentTempUnit] = useState("F");
  const [items, setItems] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAddItem = (name, url, weatherType) => {
    setIsLoading(true);
    itemsApiObject
      .add(name, url, weatherType)
      .then((res) => {
        setItems([res, ...items]);
        setIsAddModalOpen(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleItemDelete = (item) => {
    itemsApiObject
      .remove(item)
      .then(() => {
        const filteredItems = items.filter((card) => card.id !== item);
        setItems(filteredItems);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
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

  const signupUser = (email, password, name, avatar) => {
    setIsLoading(true);
    console.log(UserApi);
    UserApi.signUp(email, password, name, avatar)
      .then((res) => {
        setIsRegistered(true);
        setIsLoggedIn(true);
        setIsRegisterModalOpen(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const loginUser = (email, password) => {
    setIsLoading(true);
    UserApi.signIn(email, password)
      .then(() => {
        setIsLoggedIn(true);
        setCurrentUser(true);
        setIsLoginModalOpen(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
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

  const openAddForm = () => {
    setIsAddModalOpen(true);
  };

  const openLoginForm = () => {
    setIsLoginModalOpen(true);
  };

  const openRegisterForm = () => {
    setIsRegisterModalOpen(true);
  };

  const closeAllPopups = () => {
    setIsAddModalOpen(false);
    setIsItemModalOpen(false);
    setIsConfirmModalOpen(false);
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
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
    if (!isRegistered) {
      setIsRegisterModalOpen(true);
    }
  });

  useEffect(() => {
    if (isLoggedIn === false) {
      setIsLoginModalOpen(true);
    }
  });

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

  useEffect(() => {
    if (token) {
      UserApi.validateToken(token)
        .then(() => {
          console.log("this ran");
          setIsLoggedIn(true);
        })
        .catch(() => {
          console.log("token is invalid");
          setIsLoggedIn(false);
          localStorage.removeItem("token");
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <div className="page">
      <BrowserRouter>
        <CurrentUserContext.Provider value={currentUser}>
          <CurrentTemperatureUnitContext.Provider
            value={{ currentTemperatureUnit, handleToggleSwitchChange }}
          >
            {isLoggedIn && (
              <Header
                openForm={openAddForm}
                isLoggedIn={isLoggedIn}
                name={currentUser}
              />
            )}
            <ProtectedRoute path="/" isLoggedIn={isLoggedIn}>
              <Main
                handleCardClick={handleCardClick}
                weatherData={weatherData}
                clothingItems={items}
              />
            </ProtectedRoute>
            <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
              {isLoggedIn && (
                <Profile
                  handleCardClick={handleCardClick}
                  openForm={openAddForm}
                  clothingItems={items}
                />
              )}
            </ProtectedRoute>
            <Route exact path="/signup">
              <RegisterModal
                onClose={closeAllPopups}
                isModalOpen={isRegisterModalOpen}
                signup={signupUser}
              />
            </Route>
            <Route exact path="/signin">
              <LoginModal
                onClose={closeAllPopups}
                isModalOpen={isLoginModalOpen}
                login={loginUser}
              />
            </Route>
            {isLoggedIn && <Footer />}
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
              isModalOpen={isAddModalOpen}
              handleOverlayClick={handleOverlayClick}
              onAddItem={handleAddItem}
            />
          </CurrentTemperatureUnitContext.Provider>
        </CurrentUserContext.Provider>
      </BrowserRouter>
    </div>
  );
}
