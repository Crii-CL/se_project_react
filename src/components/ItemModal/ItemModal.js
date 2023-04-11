import "./ItemModal.css";

export default function ItemModal({ itemData, isOpen, handleOverlayClick }) {
  return (
    <>
      <div
        className={`modal ${isOpen ? "modal_opened" : ""}`}
        id="item-modal"
        onClick={handleOverlayClick}
      >
        <div className="modal__container">
          <img src={itemData?.url} className="modal__image"></img>
          <p className="modal__caption">{itemData?.name}</p>
        </div>
      </div>
    </>
  );
}
