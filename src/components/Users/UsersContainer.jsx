import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, 
  setCurrentPage, setTotalUsersCount, toggleIsFetching} from "../../redux/usersReducers";
import * as axios from 'axios'
import Users from './Users';
import Preloader from '../Preloader/Preloader';


class UsersContainer extends React.Component {
  componentDidMount(){
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
          .then(response => {
            this.props.setUsers(response.data.items)
            // this.props.setTotalUserCount(response.data.totalCount)
          })
  }
   
 onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
 }

  render = () => {  
    return <>
      {this.props.isFetching ? <Preloader/> : null}
    <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}/>
          </>
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching 
  }
}

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

//Refactor. перейменував Actioncreators
export default connect(mapStateToProps, {
  follow, unfollow, setUsers, 
  setCurrentPage, setTotalUsersCount, toggleIsFetching
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