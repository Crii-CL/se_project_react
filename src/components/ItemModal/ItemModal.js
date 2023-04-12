import "./ItemModal.css";
import closeButton from "../../images/close-button-white.svg";
import { useEffect } from "react";

export default function ItemModal({
  itemData,
  handleOverlayClick,
  isItemModalOpen,
  onClose,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
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
            onClick={onClose}
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
