import "../blocks/ItemCard.css";
import likeButton from "../images/likeButton.svg";

export default function ItemCard({ handleCardClick, name, url, weather, id }) {
  return (
    <li
      className="cards__el"
      onClick={() => handleCardClick(name, url, weather, id)}
    >
      <div className="cards__caption">
        <p className="cards__name">{name}</p>
        <button className="cards__button">
          <img src={likeButton} />
        </button>
      </div>
      <img className="cards__image" src={url} alt={name}></img>
    </li>
  );
}
