import "./ItemModal.css";
import { cardImagesArray } from "../App/App";

export default function ItemModal({ itemData }) {
  return (
    <>
      <div className="modal" id="item-modal">
        <div className="modal__container">
          <img src={itemData?.url}></img>
          <p className="modal__caption">{itemData?.name}</p>
        </div>
      </div>
    </>
  );
}
