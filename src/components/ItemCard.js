import { useContext, useState, useEffect } from "react";
import "../blocks/ItemCard.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
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
  const [isCardLiked, setIsCardLiked] = useState(isLiked);

  const handleLikeClick = () => {
    const cardIndex = items.findIndex((item) => item._id === card._id);
    const updatedItems = [...items];
    const updatedCard = { ...updatedItems[cardIndex] };

    if (isCardLiked) {
      itemsApiObject
        .removeCardLike(card._id, currentUser._id)
        .then(() => {
          console.log(card, "disliking");
          updatedCard.likes = updatedCard.likes.filter(
            (likeId) => likeId !== currentUser?._id
          );
          updatedItems[cardIndex] = updatedCard;
          setItems(updatedItems);
          setIsCardLiked(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      itemsApiObject
        .addCardLike(card._id, currentUser._id)
        .then(() => {
          console.log(card, "liking");
          updatedCard.likes.push(currentUser?._id);
          updatedItems[cardIndex] = updatedCard;
          setItems(updatedItems);
          setIsCardLiked(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  function handleLinkError() {
    setLinkError(true);
  }

  if (owner !== user || null) {
    return null;
  }
  return (
    <li className="cards__el">
      <div className="cards__caption">
        {!linkError ? <p className="cards__name">{name}</p> : <></>}
        {!linkError && currentUser && (
          <button className="cards__button">
            <img
              src={isCardLiked ? liked : disliked}
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
          onClick={() => {
            handleCardClick(name, url, weather, card._id, owner);
          }}
        ></img>
      ) : (
        <div className="cards__image-error">
          <p className="cards__error-text">Can't wear this :/</p>
        </div>
      )}
    </li>
  );
}
