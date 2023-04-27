import "../blocks/ItemCard.css";

export default function ItemCard({ handleCardClick, name, url, weather, id }) {
  return (
    <li
      className="cards__el"
      onClick={() => handleCardClick(name, url, weather, id)}
    >
      <p className="cards__caption">{name}</p>
      <img className="cards__image" src={url} alt={name}></img>
    </li>
  );
}
