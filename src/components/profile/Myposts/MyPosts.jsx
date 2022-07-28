import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';
import ProfilePostForm from './Post/PostForm';


const MyPosts = (props) => {
   //console.log(props)

let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

// let addPost = () => {
//    props.addNewPost()   
// }

let onPostChange = (values) => {
   console.log(values.newPostText)
   props.updateNewPost(values.newPostText)   
}

   return (
      <div className={s.postBlock}>
         <h3>Myposts</h3>
         <div>
            <ProfilePostForm onPostChange={onPostChange}/>
         </div>
         <div className={s.posts}>
            { postElements }
         </div>
      </div>
   )
}

export default MyPosts;