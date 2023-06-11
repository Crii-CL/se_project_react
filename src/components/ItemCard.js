import "../blocks/ItemCard.css";
import likeButton from "../images/likeButton.svg";

export default function ItemCard({
  handleCardClick,
  handleLikeClick,
  name,
  url,
  weather,
  id,
  isLiked,
  user,
  isLoggedIn,
}) {
  return (
    <li
      className="cards__el"
      onClick={() => handleCardClick(name, url, weather, id)}
    >
      <div className="cards__caption">
        <p className="cards__name">{name}</p>
        {isLoggedIn && (
          <button className="cards__button">
            <img
              src={likeButton}
              className="cards__like-image"
              onClick={() => handleLikeClick({ id, isLiked, user })}
            />
          </button>
        )}
      </div>
      <img className="cards__image" src={url} alt={name}></img>
    </li>
  );
}
