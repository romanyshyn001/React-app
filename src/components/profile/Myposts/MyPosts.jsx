import s from './MyPosts.module.css';
import React from 'react';


const MyPosts = (props) => {

// let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
// видалив ref
let newPostElement = React.createRef();

let addPost = () => {
   props.addNewPost()   
}

let onPostChange = () => {
   let text = newPostElement.current.value
   props.updateNewPost(text)
//   let action = updateNewPostTextCreator(text)
      
}

   return (
      <div className={s.postBlock}>
         <h3>Myposts</h3>
         <div>
            <label ><input onChange={ onPostChange } ref={newPostElement} value={ props.newPostText} type='text' ></input></label>
            <button onClick={ addPost }>Add post</button>
         </div>
         <div className={s.posts}>
            { props.postElem }
         </div>
      </div>
   )
}

export default MyPosts;