import { useContext } from "react";
import "../blocks/ItemCard.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useState } from "react";
import disliked from "../images/likeButton.svg";
import liked from "../images/like_active.svg";

export default function ItemCard({
  handleCardClick,
  name,
  url,
  user,
  card,
  owner,
  weather,
  _id,
  items,
  setItems,
  itemsApiObject,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const [linkError, setLinkError] = useState(false);
  const isLiked = card.likes.includes(currentUser?._id);

  const handleLikeClick = ({ card }) => {
    const cardIndex = items.indexOf(card);
    if (isLiked) {
      itemsApiObject.removeCardLike(card._id);
      const updatedCards = [
        ...items.slice(0, cardIndex),
        { ...card, isLiked: false },
        ...items.slice(cardIndex + 1),
      ];
      setItems(updatedCards);
    } else if (!isLiked) {
      itemsApiObject.addCardLike(card._id);
      const updatedCards = [
        ...items.slice(0, cardIndex),
        { ...card, isLiked: false },
        ...items.slice(cardIndex + 1),
      ];
      setItems(updatedCards);
    }
  };

  function handleLinkError() {
    setLinkError(true);
  }

  if (owner !== user || null) {
    return null;
  }

  return (
    <li
      className="cards__el"
      // onClick={() => {
      //   handleCardClick(name, url, weather, card._id, owner);
      // }}
    >
      <div className="cards__caption">
        {!linkError ? <p className="cards__name">{name}</p> : <></>}
        {!linkError && currentUser && (
          <button className="cards__button">
            <img
              src={isLiked ? liked : disliked}
              className="cards__like-image"
              onClick={() => {
                handleLikeClick({ card, isLiked });
              }}
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
