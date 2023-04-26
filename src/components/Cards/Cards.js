import "./Cards.css";

export default function Cards({ handleCardClick, name, url, weather, id }) {
  return (
    <li
      className="cards__el"
      onClick={() => handleCardClick(name, url, weather, id)}
    >
      <p className="cards__caption">{name}</p>
      <img
        className="cards__image"
        src={url}
        alt={name}
        key={`${name}._id`}
      ></img>
    </li>
  );
}
