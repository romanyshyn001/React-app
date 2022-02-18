import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';


const MyPosts = (props) => {
let newPostElement = React.createRef();
let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

let addPost = () => {
   props.addNewPost()   
}

let onPostChange = () => {
   let text = newPostElement.current.value
   props.updateNewPost(text)   
}

   return (
      <div className={s.postBlock}>
         <h3>Myposts</h3>
         <div>
            <label ><input onChange={ onPostChange } ref={newPostElement} value={ props.newPostText} type='text' ></input></label>
            <button onClick={ addPost }>Add post</button>
         </div>
         <div className={s.posts}>
            { postElements }
         </div>
      </div>
   )
}

export default MyPosts;