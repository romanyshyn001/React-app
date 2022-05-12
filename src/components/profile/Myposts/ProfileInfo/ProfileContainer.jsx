import React from "react";
import Profile from "../../Profile";
import { getUserProfile, getStatus, updateStatus } from "../../../../redux/profileReducer";
import { connect } from "react-redux";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom"
import { withAuthNavigate } from "../../../HOC/withAuthRedirect";
import { compose } from 'redux'

//Wrapper function
function withRouter(Component) {
   function ComponentWithRouterProps(props){
      let location = useLocation()
      let navigate = useNavigate()
      let params = useParams()
         return (
            <Component 
               {...props}
               router={{location, navigate, params}}
            />
      )
   }
    return ComponentWithRouterProps
}

class ProfileContainer extends React.Component {  
   componentDidMount(){
   let userId = this.props.router.params.userId 
   if(!userId){
      userId = 22985
   }
   this.props.getUserProfile(userId)
   //
   //this.props.getStatus(userId)
   this.props.getStatus(userId)
}

render () {
   //debugger
         return (
            <Profile {...this.props} 
               profile={this.props.profile}
               // status={this.props.status}
               // updateStatus={this.props.updateStatus}
            />
      )
   }
}


// let AuthNavigateComponent = withAuthNavigate(ProfileContainer)


let mapStateToProps = (state) => ({
   profile:state.profilePage.profile,
   status: state.profilePage.status
   // status:state.profilePage.status
})
//
export default compose(
   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
   withRouter,
   withAuthNavigate
)(ProfileContainer)

// export default connect(mapStateToProps, {
//   getUserProfile
// })(withRouter(AuthNavigateComponent))
