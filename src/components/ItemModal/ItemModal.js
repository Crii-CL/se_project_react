import "./ItemModal.css";

export default function ItemModal({
  itemData,
  handleOverlayClick,
  isItemModalOpen,
}) {
  return (
    <>
      <div
        className={`itemModal ${isItemModalOpen ? "modal_opened" : ""}`}
        id="item-modal"
        onClick={handleOverlayClick}
      >
        <div>
          <img src={itemData?.url} className="itemModal__image"></img>
          <p className="itemModal__caption">{itemData?.name}</p>
        </div>
      </div>
    </>
  );
}
