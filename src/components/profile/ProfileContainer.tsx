import React from "react";
import Profile from "./Profile";
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from "../../redux/profileReducer";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthNavigate } from "../HOC/withAuthRedirect";
import { compose } from "redux";
import { ProfileType, UserInfoChangeType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  getUserProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
  saveProfile: (profile: UserInfoChangeType) => Promise<any>
}

type WithRouterProps = {
  router: {
    location: ReturnType<typeof useLocation>;
    params: Record<string, string>;
    navigate: ReturnType<typeof useNavigate>;
  }
}
type PropsType = MapPropsType & DispatchPropsType & WithRouterProps

const withRouter = <Props extends WithRouterProps>(Component: React.ComponentType<Props>) => {
  const ComponentWithRouterProps = (props: Omit<Props, keyof WithRouterProps>) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...(props as Props)} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProps;
}

class ProfileContainer extends React.Component<PropsType>  {
  constructor(props: PropsType) {
    super(props);
  }
  refreshProfile() {
    let userId: number | null = +this.props.router.params.userId;

    if (!userId) {
      userId = this.props.userId;
      if (!userId) {
        this.props.router.navigate('login/')
      }
    }

    if (!userId) {
      console.error("ID should exists in URL params or in state ('userId')");
    } else {
      this.props.getUserProfile(userId)
      this.props.getStatus(userId)
    }
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
    if (this.props.router.params.userId !== prevProps.router.params.userId)
      this.refreshProfile();
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        isOwner={!this.props.router.params.userId}
        savePhoto={this.props.savePhoto}
        updateStatus={this.props.updateStatus}
        status={this.props.status}
      />
    );
  }
}

let mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userId: state.auth.userId,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter,
  withAuthNavigate
)(ProfileContainer);
