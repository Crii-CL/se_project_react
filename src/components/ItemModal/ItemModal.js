import "./ItemModal.css";
import closeButton from "../../images/close-button-white.svg";

export default function ItemModal({
  itemData,
  handleOverlayClick,
  isItemModalOpen,
  handleClose,
}) {
  return (
    <>
      <div
        className={`itemModal ${isItemModalOpen ? "modal_opened" : ""}`}
        id="item-modal"
        onClick={handleOverlayClick}
      >
        <div className="itemModal__container">
          <button
            className="modal__closeBtn"
            id="modal-item-close"
            type="button"
            onClick={handleClose}
          >
            <img src={closeButton}></img>
          </button>
          <img src={itemData?.url} className="itemModal__image"></img>
          <p className="itemModal__caption">{itemData?.name}</p>
          <p className="itemModal__caption">Weather: Hot</p>
        </div>
      </div>
    </>
  );
}
