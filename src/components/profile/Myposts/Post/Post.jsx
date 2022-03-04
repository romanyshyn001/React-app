import s from './Post.module.css';
import ava from './ava.png'
import React from 'react';

const Post = (props) => {
        
        return (
        <div className={s.item}>
                <img className={s.images} src={ava} alt='avatar'></img> 
                {props.message}
                <div>
                <span>like {props.likesCount}</span>
                </div>
        </div>
        
        )
        
}

export default Post;

