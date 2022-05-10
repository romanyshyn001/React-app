import React from 'react';
import { connect } from 'react-redux';
import { follow,  unfollow, setCurrentPage, 
  toogleFollowingProgress, getUsers } from "../../redux/usersReducers";
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import { withAuthNavigate } from '../HOC/withAuthRedirect';
import { compose } from 'redux'

class UsersContainer extends React.Component {
  componentDidMount(){
    this.props.getUsers(this.props.currentPage, this.props.pageSize)

  }
   
 onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
    this.props.setCurrentPage(pageNumber)
 }

  render = () => { 
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users  totalUsersCount={this.props.totalUsersCount}
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
// let AuthNavigateComponent = withAuthNavigate(UsersContainer)
export default compose(
  connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toogleFollowingProgress, getUsers
  }),
  withAuthNavigate
)(UsersContainer)

// export default withAuthNavigate(connect(mapStateToProps, {
//   follow, unfollow, setCurrentPage, toogleFollowingProgress, getUsers
// })(UsersContainer))
