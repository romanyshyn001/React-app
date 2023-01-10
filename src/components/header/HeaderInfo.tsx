import s from "./Header.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar, Col, Menu, Row, Layout, Button } from "antd";
import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUserLogin, selectIsAuth } from "../../redux/authSelectors";
import { logout } from "../../redux/auth-reducer";
import { getProfileSelector } from "../../redux/profileSelector";

export type MapPropsType = {}



const AppHeader: React.FC<MapPropsType> = (props) => {

  const isAuth = useSelector(selectIsAuth)
  const login = useSelector(selectCurrentUserLogin)
  const profile = useSelector(getProfileSelector)
  const dispatch = useDispatch()

  const logOutCallback = () => {
    dispatch(logout())
  }
  const { Header } = Layout;

  return (
    <Header className="header">
      <Row>
        <Col span={17}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item icon={<TeamOutlined />}><NavLink to='/developers'>Developers</NavLink></Menu.Item>
          </Menu>
        </Col>


        {isAuth ? (
          <>
            <Col span={2}>
              <Avatar src={profile !== null && profile.photos.small}
                alt={login || ''} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Col>
            <Col span={4}>
              <Button className={s.btn} danger onClick={logOutCallback}>Log Out</Button>
            </Col>
          </>
        ) : (
          <Col span={6}>
            <Button>
              <NavLink to={"/login"}>Login</NavLink>
            </Button>
          </Col>
        )}
      </Row>

    </Header>
  );
};
export default AppHeader;
