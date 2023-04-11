import "./ItemModal.css";

export default function ItemModal({ itemData, isOpen, handleOverlayClick }) {
  return (
    <>
      <div
        className={`itemModal ${isOpen ? "modal_opened" : ""}`}
        id="item-modal"
        onClick={handleOverlayClick}
      >
        <div className="itemModal__container">
          <img src={itemData?.url} className="itemModal__image"></img>
          <p className="itemModal__caption">{itemData?.name}</p>
        </div>
      </div>
    </>
  );
}
