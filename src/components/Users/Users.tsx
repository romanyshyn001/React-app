import React, { FC, useEffect } from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import { FilterType, requestUsers, follow, unfollow } from "../../redux/usersReducers";
import UserSearchForm from "./UserSearchForm";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUserFilter, getUsers } from "../../redux/users-selectors";

type PropsType = {}

export const Users: FC<PropsType> = (props) => {

  const totalUsersCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const filter = useSelector(getUserFilter)
  const users = useSelector(getUsers)
  const followingInProgress = useSelector(getFollowingInProgress)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize, filter));

  }, [])

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));

  }

  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter))
  }

  const followUser = (userId: number) => {
    dispatch(follow(userId))
  }
  const unfollowUser = (userId: number) => {
    dispatch(unfollow(userId))
  }
  return (
    <React.Fragment>
      <UserSearchForm onFilterChanged={onFilterChanged} />
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
            followUser={followUser}
            unfollowUser={unfollowUser}
          />
        </div>
      ))}
    </React.Fragment>
  );
};
