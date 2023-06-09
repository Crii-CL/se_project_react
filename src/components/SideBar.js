import "../blocks/SideBar.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext, useState } from "react";

export default function SideBar() {
  const { currentUser } = useContext(CurrentUserContext);
  const [avatarError, setAvatarError] = useState(false);

  const handleAvatarError = () => {
    setAvatarError(true);
  };

  return (
    <div className="sidebar">
      {!avatarError ? (
        <img
          className="sidebar__avatar"
          src={currentUser.avatar}
          onError={handleAvatarError}
        />
      ) : (
        <div className="sidebar__avatar-placeholder">
          <div className="sidebar__avatar-placeholder-container">
            <div>
              <p className="sidebar__avatar-placeholder-letter ">
                {currentUser?.name.charAt(0).toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      )}
      <h2 className="sidebar__title">{currentUser.name}</h2>
    </div>
  );
}
