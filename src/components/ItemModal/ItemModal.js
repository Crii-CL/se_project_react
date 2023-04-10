import "./ItemModal.css";

export default function ItemModal({
  itemData,
  isOpen,
  isClosed,
  handleOverlayClick,
}) {
  return (
    <>
      <div
        className={`modal ${isOpen ? "modal_opened" : isClosed}`}
        id="item-modal"
        onClick={handleOverlayClick}
      >
        <div className="modal__container">
          <img src={itemData?.url}></img>
          <p className="modal__caption">{itemData?.name}</p>
        </div>
      </div>
    </>
  );
}
