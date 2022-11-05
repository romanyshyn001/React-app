import "./App.css";
import NavBar from "./components/navBar/NavBar";
import { Routes, Route } from "react-router-dom";
import React, {  Suspense } from "react";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
// import LoginContainer from "./components/Login/LoginContainer";
import { Component } from "react";
import { connect } from "react-redux";
import Preloader from "./components/Preloader/Preloader";
import { initializedApp } from "./redux/app-reducer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import LoginForm from "./components/Login/LoginForm";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/dialogContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/profile/Myposts/ProfileInfo/ProfileContainer")
);

class App extends Component {

  catchAllUnhandledErrors = (reason, promise) => {
    alert('some Error occuped')
    // console.error(promiseRejectionEvent)
  }
  componentDidMount() {
    this.props.initializedApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount(){
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);

  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        <div className="app-wrapper-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
            <Route path="/" element={<ProfileContainer />} />

              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/profile/" element={<ProfileContainer />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/users" element={<UsersContainer pageTitle={"SAMURAI"}/>} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = connect(mapStateToProps, { initializedApp })(App);

const SamuraiJsApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default SamuraiJsApp;
