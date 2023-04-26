import "../blocks/Profile.css";
import Sidebar from "./SideBar";
import ClothesSection from "./ClothesSection";
import ItemCard from "./ItemCard";

export default function Profile({
  handleCardClick,
  clothingItems,
  openForm,
  isModalOpen,
}) {
  return (
    <div className="profile">
      <div className="profile__section">
        <Sidebar />
      </div>
      <div className="profile__garments">
        <ClothesSection openForm={openForm} />
        <section className="cards">
          <ul className="cards__list">
            {clothingItems.map((card) => (
              <ItemCard
                key={card.id}
                name={card.name}
                url={card.imageUrl}
                id={card.id}
                weather={card.weather}
                handleCardClick={handleCardClick}
              />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
