import "./App.css";
import NavBar from "./components/navBar/NavBar";
import { Routes, Route, NavLink } from "react-router-dom";
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

import { UserOutlined, } from '@ant-design/icons';
import { MenuProps, } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import AppHeader from "./components/header/HeaderInfo";

const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));




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
      <Layout>
        <AppHeader />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: 'colorBgContainer' }}>
            <Sider style={{ background: 'colorBgContainer' }} width={200}>
              <Menu mode="inline"
                style={{ height: '100%' }}>
                <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">

                  <Menu.Item><NavLink to='/profile'>Profile</NavLink></Menu.Item>
                  <Menu.Item><NavLink to='/dialogs'>Messages</NavLink></Menu.Item>

                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<ProfileContainer />} />
                  <Route path="/dialogs" element={<DialogsContainer />} />
                  <Route path="/profile/" element={<ProfileContainer />} />
                  <Route path="/profile/:userId" element={<ProfileContainer />} />
                  <Route
                    path="/developers"
                    element={<UserPage />}
                  />
                  <Route path="/login" element={<LoginForms />} />
                  <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
              </Suspense>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Social Network created by R. R.</Footer>
      </Layout>
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
