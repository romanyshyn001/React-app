import Post from './Post/Post';
import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/reducers/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
// let startPostValue = props.profilepage.newPostText
let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)


let addPost = () => {
   props.dispatch(addPostCreator())   
}
//тут додати колбек
let onPostChange = (body) => {
   props.dispatch(updateNewPostTextCreator(body))
   
}
   return (
      <MyPosts addNewPost={addPost}
               updateNewPost={onPostChange}
               postElem={postsElements}
               newPostText={props.newPostText}/>
   )
}

export default MyPostsContainer;