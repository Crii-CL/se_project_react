import "./Cards.css";

import cap from "../../images/Cap.svg";
import shorts from "../../images/Shorts.svg";
import sneakers from "../../images/Sneakers 1.svg";
import tshirt from "../../images/T-Shirt.svg";

const cardImagesArray = [
  { url: cap },
  { url: shorts },
  { url: sneakers },
  { url: tshirt },
];

function Cards() {
  return (
    <div className="cards" id="item-card-section">
      <ul className="cards__list" id="card-list">
        {cardImagesArray.map((cardImage, index) => (
          <li className="cards__el" key={index}>
            <img
              className="cards__image"
              src={cardImage.url}
              id={`${index}`}
              alt={`Card ${index}`}
            ></img>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cards;
