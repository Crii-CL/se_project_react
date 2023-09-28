import "../blocks/SideBar.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext, useState } from "react";

const SideBar = ({ openEdit, logout }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [avatarError, setAvatarError] = useState(false);

  const handleAvatarError = () => {
    setAvatarError(true);
  };

  const screenWidth = window.innerWidth;

  return (
    <div className="sidebar">
      {screenWidth > 1000 ? (
        <div className="sidebar__header">
          {!avatarError ? (
            <img
              className="sidebar__avatar"
              alt="sidear avatar image 1"
              src={currentUser?.avatar}
              onError={handleAvatarError}
            />
          ) : (
            <div className="sidebar__avatar-placeholder">
              <div className="sidebar__avatar-placeholder-container">
                <div>
                  <p className="sidebar__avatar-placeholder-letter">
                    {currentUser?.name ? (
                      currentUser?.name.charAt(0).toUpperCase()
                    ) : (
                      <></>
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}
          <h2 className="sidebar__name">{currentUser?.name}</h2>
        </div>
      ) : (
        <>
          {!avatarError ? (
            <img
              className="sidebar__avatar"
              src={currentUser?.avatar}
              alt="avatar image 2"
              onError={handleAvatarError}
            />
          ) : (
            <div className="sidebar__avatar-placeholder">
              <div className="sidebar__avatar-placeholder-container">
                <div>
                  <p className="sidebar__avatar-placeholder-letter">
                    {currentUser?.name ? (
                      currentUser?.name.charAt(0).toUpperCase()
                    ) : (
                      <></>
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}
          <h2 className="sidebar__name">{currentUser?.name}</h2>
        </>
      )}
      <button className="sidebar__button" onClick={openEdit}>
        Edit Profile
      </button>
      <button className="sidebar__button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default SideBar;
