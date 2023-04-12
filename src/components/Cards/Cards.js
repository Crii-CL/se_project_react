import "./Cards.css";

export default function Cards({ handleCardClick, name, url, toggleModal }) {
  return (
    <li className="cards__el" onClick={() => handleCardClick(name, url)}>
      <p className="cards__caption">{name}</p>
      <img className="cards__image" src={url} alt={name}></img>
    </li>
  );
}
