import "./ClothesSection.css";

export default function ClothesSection({ openForm }) {
  return (
    <div className="clothes">
      <h2 className="clothes__header">Your Items</h2>
      <button className="clothes__button" onClick={openForm}>
        +Add New
      </button>
    </div>
  );
}
