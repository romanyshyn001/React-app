import React from "react";
import Profile from "../../Profile";
import axios from "axios";
import { setUserProfile } from "../../../../redux/profileReducer";
import { connect } from "react-redux";
import { useMatch } from "react-router-dom"

class ProfileContainer extends React.Component {
  

  componentDidMount(){
    // debugger;
    let userId =   this.props.match 
    if(!userId){
      userId = 22850
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    )
        .then(response => {
          this.props.setUserProfile(response.data)
          // this.props.setTotalUserCount(response.data.totalCount)
        })
  }

  render () {
    return (
        <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}



let mapStateToProps = (state) => ({
   profile:state.profilePage.profile
})

const ProfileURLMatch = (props) => {
  const match = useMatch('/profile/:userId/')
    return <ProfileContainer {...props} match={match}/>
}

export default connect(mapStateToProps, {
  setUserProfile
})(ProfileURLMatch)