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
import Modal from "../blocks/modal.css";
import fonts from "../vendor/Fonts/fonts.css";
import "../blocks/AddItemModal.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { BrowserRouter, Route } from "react-router-dom";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import { Switch } from "react-router-dom";
import EditProfileModal from "./EditProfileModal";

export default function App() {
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [weatherData, setWeatherData] = useState("");
  const [currentTemperatureUnit, setCurrentTempUnit] = useState("F");
  const [items, setItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const token = localStorage.getItem("jwt");
  const UserApi = SignupOrSignin();
  const itemsApiObject = itemsApi(currentUser);

  console.log(items);
  const handleAddItem = (name, url, weatherType) => {
    setIsLoading(true);
    itemsApiObject
      .add(name, url, weatherType)
      .then((res) => {
        console.log(res.data);
        setItems([res.data, ...items]);
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
        const filteredItems = items.filter((card) => card._id !== item);
        setItems(filteredItems);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCardClick = (name, url, weather, _id, owner) => {
    setIsItemModalOpen(true);
    setModalData({
      name,
      url,
      weather,
      _id,
      owner,
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

  const openEditProfileForm = () => {
    setIsEditProfileModalOpen(true);
  };

  const closeAllPopups = () => {
    setIsAddModalOpen(false);
    setIsItemModalOpen(false);
    setIsConfirmModalOpen(false);
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
    setIsEditProfileModalOpen(false);
  };

  const handleConfirmModalClose = () => {
    setIsConfirmModalOpen(false);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTempUnit("C")
      : setCurrentTempUnit("F");
  };

  function signOutUser() {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
  }

  /* ----------------------------- User Auth ----------------------------- */
  const signupUser = (email, password, name, avatar) => {
    setIsLoading(true);
    UserApi.signUp(email, password, name, avatar)
      .then(() => {
        setIsRegistered(true);
        setIsLoginModalOpen(true);
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
        setIsLoginModalOpen(false);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const editProfile = (name, avatar) => {
    setIsLoading(true);
    UserApi.editUser(name, avatar, token)
      .then(() => {
        console.log(currentUser);
        setCurrentUser({ ...currentUser, name, avatar });
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  /* ------------------------------------ . ----------------------------------- */

  /* ------------------------------- UseEffects ------------------------------- */
  useEffect(() => {
    const handleEscapeOut = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };

    document.addEventListener("keydown", handleEscapeOut);

    return () => {
      document.removeEventListener("keydown", handleEscapeOut);
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

  useEffect(() => {
    if (token) {
      UserApi.validateToken(token)
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch(() => {
          console.log("token is invalid");
          setIsLoggedIn(false);
          localStorage.removeItem("jwt");
        })
        .finally(() => {
          setIsLoggedIn(true);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  return (
    <div className="page">
      <BrowserRouter>
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
          <CurrentTemperatureUnitContext.Provider
            value={{ currentTemperatureUnit, handleToggleSwitchChange }}
          >
            <Header
              openForm={openAddForm}
              isLoggedIn={isLoggedIn}
              register={openRegisterForm}
              login={openLoginForm}
              signOut={signOutUser}
            />
            <Switch>
              <Route exact path="/">
                <Main
                  handleCardClick={handleCardClick}
                  weatherData={weatherData}
                  isLoggedIn={isLoggedIn}
                  items={items}
                  setItems={setItems}
                  itemsApiObject={itemsApiObject}
                />
              </Route>
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                {isLoggedIn && (
                  <Profile
                    handleCardClick={handleCardClick}
                    openForm={openAddForm}
                    openEdit={openEditProfileForm}
                    logout={signOutUser}
                    isLoggedIn={isLoggedIn}
                    items={items}
                    setItems={setItems}
                    itemsApiObject={itemsApiObject}
                  />
                )}
              </ProtectedRoute>
            </Switch>
            <EditProfileModal
              onClose={closeAllPopups}
              isModalOpen={isEditProfileModalOpen}
              handleOverlayClick={handleOverlayClick}
              editProfile={editProfile}
            ></EditProfileModal>
            <RegisterModal
              handleOverlayClick={handleOverlayClick}
              onClose={closeAllPopups}
              isModalOpen={isRegisterModalOpen}
              handleRegisterModal={setIsRegisterModalOpen}
              handleLoginModal={setIsLoginModalOpen}
              signup={signupUser}
            />
            <LoginModal
              onClose={closeAllPopups}
              handleOverlayClick={handleOverlayClick}
              isModalOpen={isLoginModalOpen}
              handleRegisterModal={setIsRegisterModalOpen}
              handleLoginModal={setIsLoginModalOpen}
              login={loginUser}
            />
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
              currentUser={currentUser}
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
