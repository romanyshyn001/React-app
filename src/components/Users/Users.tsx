import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/userPhoto.png";
import { UsersType } from "../../types/types";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from "./users.module.css";


type PropsType = {
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  totalUsersCount: number
  pageSize: number
  users: Array<UsersType>
  followingInProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

let Users: FC<PropsType> = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
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
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        </div>
      ))}
    </React.Fragment>
  );
};
export default Users;
