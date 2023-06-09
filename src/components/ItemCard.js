import "../blocks/ItemCard.css";
import likeButton from "../images/likeButton.svg";

export default function ItemCard({ handleCardClick, name, url, weather, id }) {
  return (
    <li
      className="cards__el"
      onClick={() => handleCardClick(name, url, weather, id)}
    >
      <p className="cards__caption">{name}</p>
      <button className="cards__button" src={likeButton}></button>
      <img className="cards__image" src={url} alt={name}></img>
    </li>
  );
}
