import "./Profile.css";
import Sidebar from "./Sidebar/Sidebar";
import ClothesSection from "./ClothesSection/ClothesSection";

export default function Profile() {
  return (
    <div className="profile">
      <Sidebar />
      <ClothesSection />
    </div>
  );
}
