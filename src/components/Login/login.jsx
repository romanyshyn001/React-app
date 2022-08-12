import React from "react";
import { Navigate } from "react-router-dom";
import LoginForms from "./LoginForm";

export class Login extends React.Component {
  
  render(){
    if(this.props.isAuth){
      return <Navigate to={'/profile'}/>
    }
    return (
      <div>
        <h1>Login</h1>
        <LoginForms login={this.props.login} messageAPI={this.props.messageAPI}/>
      </div>
    )
  }
}