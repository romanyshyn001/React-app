import React, { FC, useEffect } from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import { FilterType, requestUsers, follow, unfollow } from "../../redux/usersReducers";
import UserSearchForm from "./UserSearchForm";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUserFilter, getUsers } from "../../redux/users-selectors";
import { useLocation, useNavigate } from 'react-router-dom';
import { stringify } from "querystring";


type PropsType = {}
type QueryParamsType = { term?: string; page?: string; friend?: string }

export const Users: FC<PropsType> = (props) => {

  const totalUsersCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const filter = useSelector(getUserFilter)
  const users = useSelector(getUsers)
  const followingInProgress = useSelector(getFollowingInProgress)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const location = useLocation()


  useEffect(() => {

    const parsed = new URLSearchParams(location.search)
    let actualPage = currentPage
    let actualFilter = filter

    if (parsed.get('page'))
      actualPage = Number(parsed.get('page'))

    if (parsed.get('term'))
      actualFilter = { ...actualFilter, term: parsed.get('term') as string }

    if (parsed.get('friend'))
      switch (parsed.get('friend')) {
        case "null":
          actualFilter = { ...actualFilter, friend: null }
          break;
        case "true":
          actualFilter = { ...actualFilter, friend: false }
      }

    dispatch(requestUsers(actualPage, pageSize, actualFilter));

  }, [])


  useEffect(() => {
    const query: QueryParamsType = {}

    if (!!filter.term) query.term = filter.term
    if (filter.friend) query.friend = String(filter.friend)
    if (currentPage !== 1) query.page = String(currentPage)

    navigate({
      pathname: '/developers',
      search: stringify(query)
    })
  }, [filter, currentPage])


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
