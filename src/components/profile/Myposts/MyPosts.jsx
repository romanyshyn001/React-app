import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
// import { posts } from '../../MyPostsData';

const MyPosts = (props) => {

        //Створив окремий фал даних в component
// let posts = [
//         {id:1, message:'Hi', likesCount:12},
//         {id:2, message:'How is going?', likesCount:12},
//         {id:3, message:'What the plan', likesCount:15},
//         {id:4, message:'Bingo', likesCount:16},
//         {id:5, message:'Great Job!', likesCount:2}
// ]


let postsElements = 
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)


//
let newPostElement = React.createRef();
let addPost = () => {

let text = newPostElement.current.value
        props.addPost(text)  
        props.updateNewPostText('')      
}

let onPostChange = () => {
        let text = newPostElement.current.value
                props.updateNewPostText(text)
}
        return (
                <div className={s.postBlock}>
                        <h3>Myposts</h3>
                        <div>
                                <label ><input onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText} type='text' ></input></label>
                                <button onClick={ addPost }>Add post</button>
                        </div>
                        <div className={s.posts}>
                                { postsElements }
                        </div>
                </div>
        )
}

export default MyPosts;