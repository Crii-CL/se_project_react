import "./ItemModal.css";
import closeButton from "../../../images/close-button-white.svg";
import closeButtonDark from "../../../images/close-button.svg";

export default function ItemModal({
  itemData,
  handleOverlayClick,
  isItemModalOpen,
  isConfirmModalOpen,
  onClose,
  handleCardDelete,
  openConfirmModal,
}) {
  return (
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
          onClick={onClose}
        >
          <img src={closeButton} alt="white close button"></img>
        </button>
        <img
          src={itemData?.url}
          className="itemModal__image"
          alt="item image"
        ></img>
        <p className="itemModal__caption">{itemData?.name}</p>
        <p className="itemModal__caption">Weather: Hot</p>
        <button className="itemModal__delBtn" onClick={openConfirmModal}>
          Delete Item
        </button>
      </div>
      <div
        className={`itemModal__confirm ${
          isConfirmModalOpen ? "modal_opened" : ""
        }`}
      >
        <div className="itemModal__confirm-container">
          <button
            className="modal__closeBtn"
            id="modal-item-confirm-close"
            type="button"
            onClick={onClose}
          >
            <img src={closeButtonDark} alt="white close button"></img>
          </button>
          <p className="itemModal__confirm-caption">
            Are you sure you want to delete this item? This action is
            irreversible.
          </p>
          <button
            className="itemModal__confirm-delBtn"
            onClick={handleCardDelete}
          >
            Delete Item
          </button>
          <button className="itemModal__confirm-cancelBtn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
