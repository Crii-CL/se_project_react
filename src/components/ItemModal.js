import "../blocks/ItemModal.css";
import closeButton from "../images/close-button-white.svg";
import closeButtonDark from "../images/close-button.svg";

const ItemModal = ({
  onClose,
  itemData,
  isItemModalOpen,
  isConfirmModalOpen,
  handleOverlayClick,
  handleItemDelete,
  openConfirmModal,
  handleConfirmModalClose,
  currentUser,
}) => {
  return (
    <div
      className={`itemModal ${isItemModalOpen ? "modal_opened" : "hidden"} ${
        !isItemModalOpen && onClose ? "modal_closed" : ""
      }  `}
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
        <img src={itemData?.url} className="itemModal__image" alt="item"></img>
        <p className="itemModal__caption">{itemData?.name}</p>
        <p className="itemModal__caption">Weather: {itemData?.weather}</p>
        {currentUser?._id === itemData?.owner && (
          <button className="itemModal__delBtn" onClick={openConfirmModal}>
            Delete Item
          </button>
        )}
      </div>
      <div
        className={`itemModal__confirm ${
          isConfirmModalOpen ? "modal_opened" : "hidden"
        } ${!isConfirmModalOpen && onClose ? "modal_closed" : ""}`}
        onClick={handleOverlayClick}
      >
        <div className="itemModal__confirm-container">
          <button
            className="modal__closeBtn"
            id="modal-item-confirm-close"
            type="button"
            onClick={handleConfirmModalClose}
          >
            <img src={closeButtonDark} alt="white close button"></img>
          </button>
          <p className="itemModal__confirm-caption">
            Are you sure you want to delete this item? This action is
            irreversible.
          </p>
          <button
            type="submit"
            className="itemModal__confirm-delBtn"
            onClick={() => {
              handleItemDelete(itemData._id);
            }}
          >
            Delete Item
          </button>
          <button
            className="itemModal__confirm-cancelBtn"
            onClick={handleConfirmModalClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
