import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import ProfilePostForm from "./Post/PostForm";
import { PureComponent } from "react";

const MyPosts = React.memo((props) => {
  let postElements = [...props.posts]
    .reverse()
    .map((p) => (
      <Post message={p.message} likesCount={p.likesCount} key={p.id} />
    ));

  let onPostChange = (values) => {
    console.log(values.newPostText);
    props.updateNewPost(values.newPostText);
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
});

export default MyPosts;
