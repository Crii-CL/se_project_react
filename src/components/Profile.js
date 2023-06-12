import "../blocks/Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import ItemCard from "./ItemCard";
import { v4 as uuidv4 } from "uuid";

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
  const uniqueId = uuidv4();

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
                  key={uniqueId}
                  name={card.name}
                  url={card.imageUrl}
                  id={card.id}
                  weather={card.weather}
                  isLiked={isLiked}
                  handleCardClick={handleCardClick}
                  handleLikeClick={handleLikeClick}
                  isLoggedIn={isLoggedIn}
                  card={card}
                  owner={card.owner}
                />
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
