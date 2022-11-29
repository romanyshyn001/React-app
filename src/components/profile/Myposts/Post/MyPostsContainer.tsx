import { actions } from "../../../../redux/profileReducer";
import MyPosts, { DispatchPropsType, PropsType } from "../MyPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
  } as PropsType;
};

const MyPostsContainer = connect<PropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, { updateNewPost: actions.updateNewPostTextCreator })(MyPosts);

export default MyPostsContainer;
