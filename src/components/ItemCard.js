import { useContext } from "react";
import "../blocks/ItemCard.css";
import disliked from "../images/likeButton.svg";
import liked from "../images/like_active.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useState } from "react";
import { useEffect } from "react";

export default function ItemCard({
  handleCardClick,
  handleLikeClick,
  name,
  url,
  weather,
  id,
  user,
  card,
  owner,
  isLiked,
}) {
  const [linkError, setLinkError] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  function handleLinkError() {
    setLinkError(true);
  }

  if (owner !== user || null) {
    return null;
  }

  return (
    <li
      className="cards__el"
      onClick={() => handleCardClick(name, url, weather, id, owner)}
    >
      <div className="cards__caption">
        {!linkError ? <p className="cards__name">{name}</p> : <></>}
        {!linkError && (
          <button className="cards__button">
            <img
              src={isLiked ? liked : disliked}
              className={"cards__like-image"}
              onClick={() => handleLikeClick({ card, isLiked })}
            />
          </button>
        )}
      </div>
      {!linkError ? (
        <img
          className="cards__image"
          src={url}
          alt={name}
          onError={handleLinkError}
        ></img>
      ) : (
        <div className="cards__image-error">
          <p className="cards__error-text">Can't wear this :/</p>
        </div>
      )}
    </li>
  );
}
