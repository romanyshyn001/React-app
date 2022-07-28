import { connect } from "react-redux";
import { compose } from "redux";
import { login } from './../../redux/auth-reducer'
import { Login } from "./Login";



let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    messageAPI: state.auth.messageAPI,
  };
};
export default compose(connect(mapStateToProps, {login}))(Login)

