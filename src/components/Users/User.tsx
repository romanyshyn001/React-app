import { Avatar } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/userPhoto.png";
import { UsersType } from "../../types/types";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import s from "./users.module.css";
import { Col, Divider, Row } from "antd";

type PropsType = {
  user: UsersType;
  followingInProgress: Array<number>;
  followUser: (userId: number) => void;
  unfollowUser: (userId: number) => void;
};

let User: React.FC<PropsType> = ({
  user,
  followingInProgress,
  followUser,
  unfollowUser,
}) => {
  return (
    <React.Fragment>
      <div>
        <div>
          <div className={"s.userContainer"}>
            <Divider orientation="left"></Divider>
            <Row gutter={[8, 16]}>
              <Col>
                <NavLink to={"./../profile/" + user.id}>
                  <Avatar
                    size={100}
                    icon={<UserOutlined />}
                    src={
                      user.photos.small != null ? user.photos.small : userPhoto
                    }
                    alt="img"
                  />
                </NavLink>
              </Col>
              <Col>
                <span>
                  <div>
                    <span>ID:</span>
                    {user.id}
                  </div>
                  <div>
                    <span>Name:</span>
                    {user.name}
                  </div>
                </span>
              </Col>
            </Row>
          </div>

          <div>
            {user.followed ? (
              <Button
                className={s.btn}
                type="primary"
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  unfollowUser(user.id);
                }}
              >
                Unfollow
              </Button>
            ) : (
              <Button
                className={s.btn}
                type="primary"
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  followUser(user.id);
                }}
              >
                Follow
              </Button>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default User;
