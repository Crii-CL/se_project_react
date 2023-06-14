import "../blocks/Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import ItemCard from "./ItemCard";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

export default function Profile({
  handleCardClick,
  handleLikeClick,
  clothingItems,
  openForm,
  openEdit,
  logout,
  isLoggedIn,
  isLiked,
}) {
  const currentUser = useContext(CurrentUserContext);
  console.log(isLiked, "likes");

  return (
    <div className="profile">
      <div className="profile__section">
        <SideBar openEdit={openEdit} logout={logout} />
      </div>
      <div className="profile__garments">
        <ClothesSection openForm={openForm} />
        <section className="cards">
          <ul className="cards__list">
            {clothingItems?.map((card) => {
              return (
                <ItemCard
                  key={card._id}
                  name={card.name}
                  url={card.imageUrl}
                  id={card._id}
                  weather={card.weather}
                  isLiked={isLiked}
                  handleCardClick={handleCardClick}
                  handleLikeClick={handleLikeClick}
                  isLoggedIn={isLoggedIn}
                  card={card}
                  owner={card.owner}
                  user={currentUser?.currentUser._id}
                />
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
