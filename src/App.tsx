import "./App.css";
import NavBar from "./components/navBar/NavBar";
import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Preloader from "./components/Preloader/Preloader";
import { initializedApp } from "./redux/app-reducer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { AppStateType } from "./redux/redux-store";
import UserPage from "./components/Users/UsersContainer";
import { LoginForms } from "./components/Login/LoginForm";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/profile/ProfileContainer")
);


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializedApp: () => void
}
class App extends Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert("some Error occuped");
  };
  componentDidMount() {
    this.props.initializedApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
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
              <Route
                path="/users"
                element={<UserPage />}
              />
              <Route path="/login" element={<LoginForms />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});

let AppContainer = connect(mapStateToProps, { initializedApp })(App);

const SamuraiJsApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default SamuraiJsApp;
