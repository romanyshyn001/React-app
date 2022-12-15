import React from "react";
import { useSelector } from "react-redux";
import Preloader from "../Preloader/Preloader";
import {
  getIsFetching
} from "../../redux/users-selectors";
import { Users } from "./Users";


type UserPagePropsType = {
  // pageTitle: string
}
const UserPage: React.FC<UserPagePropsType> = (props) => {
  const isFetching = useSelector(getIsFetching)
  // const isFetching = useSelector(getIsFetching)

  return (
    <>
      <h2>Users</h2>
      {isFetching ? <Preloader /> : null}
     <Users/>
    </>
  );
}
export default UserPage
