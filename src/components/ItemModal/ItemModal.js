import "./ItemModal.css";

export default function ItemModal({ itemData, isOpen, onClose }) {
  return (
    <>
      <div className={`modal ${isOpen ? "modal_opened" : ""}`} id="item-modal">
        <div className="modal__container">
          <img src={itemData?.url}></img>
          <p className="modal__caption">{itemData?.name}</p>
        </div>
      </div>
    </>
  );
}
