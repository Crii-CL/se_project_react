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
  const [weatherSort, setWeatherSort] = useState(items);

  useEffect(() => {
    const sortedItems = [...items].sort((a, b) => {
      if (a.weather === "Hot" && b.weather !== "Hot") return -1;
      if (a.weather !== "Hot" && b.weather === "Hot") return 1;
      if (a.weather === "Warm" && b.weather === "Cold") return -1;
      if (a.weather === "Cold" && b.weather === "Warm") return 1;
      return 0;
    });

    setWeatherSort(sortedItems);
  }, [items]);
  const sortedItems = weatherSort;

  return (
    <div className="profile">
      <div className="profile__section">
        <SideBar openEdit={openEdit} logout={logout} />
      </div>
      <div className="profile__garments">
        <ClothesSection openForm={openForm} />
        <section className="cards">
          <ul className="cards__list">
            {sortedItems?.map((card) => {
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
