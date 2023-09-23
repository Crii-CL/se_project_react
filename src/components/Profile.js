import "../blocks/Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import ItemCard from "./ItemCard";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext, useEffect, useState } from "react";
import disliked from "../images/likeButton.svg";
import liked from "../images/like_active.svg";

const Profile = ({
  handleCardClick,
  openForm,
  openEdit,
  logout,
  isLoggedIn,
  items,
  setItems,
  itemsApiObject,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  let [weatherType, setWeatherType] = useState("Your Items");
  let [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    let filteredItems = [];
    if (weatherType === "Hot") {
      filteredItems = items.filter((item) => item.weather === "Hot");
    } else if (weatherType === "Warm") {
      filteredItems = items.filter((item) => item.weather === "Warm");
    } else if (weatherType === "Cold") {
      filteredItems = items.filter((item) => item.weather === "Cold");
    } else {
      filteredItems = items;
    }
    setCurrentItems(filteredItems);
  }, [items, weatherType]);

  return (
    <div className="profile">
      <div className="profile__section">
        <SideBar openEdit={openEdit} logout={logout} />
      </div>
      <div className="profile__garments">
        <ClothesSection
          openForm={openForm}
          weatherType={weatherType}
          setWeatherType={setWeatherType}
        />
        <section className="cards">
          <ul className="cards__list">
            {currentItems?.map((card) => {
              return (
                <ItemCard
                  key={card?._id}
                  name={card?.name}
                  url={card?.imageUrl}
                  id={card?._id}
                  weather={card?.weather}
                  handleCardClick={handleCardClick}
                  isLoggedIn={isLoggedIn}
                  card={card}
                  owner={card?.owner}
                  user={currentUser?._id}
                  items={items}
                  setItems={setItems}
                  itemsApiObject={itemsApiObject}
                />
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Profile;
