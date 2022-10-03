import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/userPhoto.png";
import Paginator from "../common/Paginator/Paginator";
import styles from "./users.module.css";

let User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <React.Fragment>
      <div>
        <span>
          <div>
            <NavLink to={"./../profile/" + user.id}>
              <img
                src={user.photos.small != null ? user.photos.small : userPhoto}
                alt="img"
                className={styles.userPhoto}
              />
            </NavLink>
          </div>

          <div>
            {user.followed ? (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  follow(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </span>

        <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
        </span>
      </div>
    </React.Fragment>
  );
};
export default User;
