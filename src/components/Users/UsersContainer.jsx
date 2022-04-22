import React from 'react';
import { connect } from 'react-redux';
import { follow,  unfollow, setCurrentPage, 
  toogleFollowingProgress, getUsers } from "../../redux/usersReducers";
import Users from './Users';
import Preloader from '../Preloader/Preloader';


class UsersContainer extends React.Component {
  componentDidMount(){
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
    // this.props.toggleIsFetching(true)

    //   usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
    //       .then(data => {
    //         //debugger;
    //         this.props.setUsers(data.items)
    //         this.props.setTotalUserCount(data.totalCount)
    //       })
  }
   
 onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
    this.props.setCurrentPage(pageNumber)
    // this.props.toggleIsFetching(true)

    // usersAPI.getUsers(pageNumber, this.props.pageSize)
    //   .then(data => {
    //     this.props.toggleIsFetching(false)
    //     this.props.setUsers(data.items)
    //   })
 }

  render = () => {  
    // debugger;
    return <>
      {this.props.isFetching ? <Preloader/> : null}
    <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  followingInProgress={this.props.followingInProgress}
              />
          </>
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress

  }
}
//
// let mapDispatchToProps = (dispatch) => {
//   return{
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// }
//
//Refactor. перейменував Actioncreators
//
export default connect(mapStateToProps, {
  follow, unfollow, setCurrentPage,  
  toogleFollowingProgress, getUsers
})(UsersContainer)


















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