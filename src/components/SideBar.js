import "../blocks/SideBar.css";
import avatar from "../images/avatar.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar}></img>
      <h2 className="sidebar__title">Cristopher Campos</h2>
    </div>
  );
}
