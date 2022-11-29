import s from "./MyPosts.module.css";
import React, { FC } from "react";
import Post from "./Post/Post";
import ProfilePostForm from "./AddPost/PostForm";
import { PostType } from "../../../types/types";


export type PropsType = {
  posts: Array<PostType>
}
export type DispatchPropsType = {
  updateNewPost: (newPostText: string) => void
}
const MyPosts: FC<PropsType & DispatchPropsType> = (props) => {
  let postElements = [...props.posts]
    .reverse()
    .map((p) => (
      <Post message={p.message} likesCount={p.likesCount} key={p.id} />
    ));

  let onPostChange = (newPostText: string) => {
    props.updateNewPost(newPostText);
  };

  return (
    <div className={s.postBlock}>
      <h3>Myposts</h3>
      <div>
        <ProfilePostForm onPostChange={onPostChange} />
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};
const MyPostsMemorized = React.memo(MyPosts)
export default MyPostsMemorized;
