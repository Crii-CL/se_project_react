import { useContext } from "react";
import "../blocks/ItemCard.css";
import disliked from "../images/likeButton.svg";
import liked from "../images/like_active.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function ItemCard({
  handleCardClick,
  handleLikeClick,
  name,
  url,
  weather,
  id,
  isLoggedIn,
  card,
  isLiked,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <li
      className="cards__el"
      onClick={() => handleCardClick(name, url, weather, id)}
    >
      <div className="cards__caption">
        <p className="cards__name">{name}</p>
        {isLoggedIn && currentUser._id === card.owner._id && (
          <button className="cards__button">
            <img
              src={isLiked ? liked : disliked}
              className={"cards__like-image"}
              onClick={() => handleLikeClick({ card, isLiked })}
            />
          </button>
        )}
      </div>
      <img className="cards__image" src={url} alt={name}></img>
    </li>
  );
}
