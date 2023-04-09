import "./Cards.css";
import cap from "../../images/Cap.svg";
import shorts from "../../images/Shorts.svg";
import sneakers from "../../images/Sneakers 1.svg";
import tshirt from "../../images/T-Shirt.svg";

const cardImagesArray = [
  { url: cap, name: "Cap" },
  { url: shorts, name: "Shorts" },
  { url: sneakers, name: "Sneakers" },
  { url: tshirt, name: "T-Shirt" },
];

export default function Cards() {
  return (
    <section className="cards" id="card-section">
      <ul className="cards__list" id="card-list">
        {cardImagesArray.map((cardImage, index) => (
          <li className="cards__el" key={index}>
            <p className="cards__caption">{cardImage.name}</p>
            <img
              className="cards__image"
              src={cardImage.url}
              id={`${cardImage.name}`}
              alt={`Card ${index}`}
            ></img>
          </li>
        ))}
      </ul>
    </section>
  );
}
