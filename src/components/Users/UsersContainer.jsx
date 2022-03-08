import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducers";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)


















// import React from "react";
// import { connect } from "react-redux";
// import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducers";
// import Users from './Users'

// let mapStateToProps = (state) => {
//   return {
//     usersInfo: state.usersPage.users
//   }
// }

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     }
//   }
// } 
// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

// export default UsersContainer;