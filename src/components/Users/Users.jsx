import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/userPhoto.png";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from "./users.module.css";

let Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  follow,
  unfollow,
  followingInProgress,
  ...props
}) => {
  return (
    <React.Fragment>
      <Paginator
        currentPage={currentPage}
        totalItemsCount={totalUsersCount}
        onPageChanged={onPageChanged}
        pageSize={pageSize}
      />
      {users.map((u) => (
        <div key={u.id}>
          <User
            user={u}
            key={u.id}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
          />
        </div>
      ))}
    </React.Fragment>
  );
};
export default Users;
