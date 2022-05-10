import React from "react";
import Profile from "../../Profile";
import { getUserProfile } from "../../../../redux/profileReducer";
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
      userId = 2
   }
   this.props.getUserProfile(userId)
}

render () {
         return (
            <Profile {...this.props} 
               profile={this.props.profile}
            />
      )
   }
}


// let AuthNavigateComponent = withAuthNavigate(ProfileContainer)


let mapStateToProps = (state) => ({
   profile:state.profilePage.profile,
})

export default compose(
   connect(mapStateToProps, { getUserProfile }),
   withRouter,
   withAuthNavigate
)(ProfileContainer)

// export default connect(mapStateToProps, {
//   getUserProfile
// })(withRouter(AuthNavigateComponent))
