import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/userPhoto.png";
import { UsersType } from "../../types/types";
import Paginator from "../common/Paginator/Paginator";
import styles from "./users.module.css";

type PropsType = {
  user: UsersType
  followingInProgress: Array<number>
  followUser: (userId: number) => void
  unfollowUser: (userId: number) => void
}

let User: React.FC<PropsType> = ({ user, followingInProgress, followUser, unfollowUser }) => {
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
                  unfollowUser(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  followUser(user.id);
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
