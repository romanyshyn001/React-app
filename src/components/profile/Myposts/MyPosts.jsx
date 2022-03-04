import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';


const MyPosts = (props) => {
// let newPostElement = React.createRef();
let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

let addPost = () => {
   props.addNewPost()   
}

let onPostChange = (e) => {
   let text = e.target.value
   props.updateNewPost(text)   
}

   return (
      <div className={s.postBlock}>
         <h3>Myposts</h3>
         <div>
            <label ><textarea
                           value={props.newPostText} 
                           type='text' 
                           onChange={ onPostChange }></textarea></label>
            <button onClick={ addPost }>Add post</button>
         </div>
         <div className={s.posts}>
            { postElements }
         </div>
      </div>
   )
}

export default MyPosts;