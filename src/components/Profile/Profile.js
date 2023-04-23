import "./Profile.css";
import Sidebar from "./Sidebar/Sidebar";
import ClothesSection from "./ClothesSection/ClothesSection";
import Cards from "../Cards/Cards";

export default function Profile({
  handleCardClick,
  garments,
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
            {garments.map((card) => (
              <Cards
                key={card._id}
                handleCardClick={handleCardClick}
                name={card.name}
                url={card.link}
              />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
