import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);

// import React from 'react';
// import Header from './Header';
// import * as axios from 'axios';
// import { setAuthUserData } from '../../redux/auth-reducer';
// import { connect } from 'react-redux';

// class HeaderContainer extends React.Component {

//   componentDidMount(){
//  //  debugger;
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users/auth/me`, { withCredentials: true
//       })
//           .then(response => {
//             debugger;
//             if(response.data.resultCode === 0){
//               let{id, login, email} = response.data.data
//               this.props.setAuthUserData(id, login, email)
//             }
//           })
//   }

//   render(){
//    debugger
//     return(
//       <Header {...this.props}/>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//   isAuth: state.auth.isAuth,
//   login: state.auth.login
// })

// export default connect (mapStateToProps, {setAuthUserData})(HeaderContainer);
