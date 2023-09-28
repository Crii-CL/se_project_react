import React, { useContext, useState, useEffect } from "react";
import "../blocks/ItemCard.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import disliked from "../images/likeButton.svg";
import liked from "../images/like_active.svg";

const ItemCard = ({
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
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [linkError, setLinkError] = useState(false);
  const [isCardLiked, setIsCardLiked] = useState(
    card.likes.includes(currentUser?._id)
  );

  const screenWidth = window.innerWidth;

  useEffect(() => {
    setIsCardLiked(card.likes.includes(currentUser?._id));
  }, [card.likes, currentUser?._id]);

  const handleLikeClick = () => {
    const cardIndex = items.findIndex((item) => item._id === card._id);
    const updatedItems = [...items];
    const updatedCard = { ...updatedItems[cardIndex] };

    if (isCardLiked) {
      itemsApiObject
        .removeCardLike(card._id, currentUser?._id)
        .then(() => {
          updatedCard.likes = updatedCard.likes.filter(
            (likeId) => likeId !== currentUser._id
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
        .addCardLike(card._id, currentUser?._id)
        .then(() => {
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
        {!linkError && screenWidth > 500 && (
          <p className="cards__name">{name}</p>
        )}
        {!linkError && currentUser && (
          <button className="cards__button">
            <img
              src={isCardLiked ? liked : disliked}
              className="cards__like-image"
              alt="card like"
              onClick={() => {
                handleLikeClick();
              }}
            />
          </button>
        )}
      </div>
      {!linkError && (
        <div>
          <img
            className="cards__image"
            src={url}
            alt={name}
            onError={handleLinkError}
            onClick={() => {
              handleCardClick(name, url, weather, card._id, owner);
            }}
          ></img>
        </div>
      )}
    </li>
  );
};

export default ItemCard;
