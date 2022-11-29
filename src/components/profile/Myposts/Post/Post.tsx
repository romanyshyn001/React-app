import s from './Post.module.css';
import ava from '../../../../assets/images/ava.png'
import React from 'react';

type PropsType = {
   message: string
   likesCount: number
}
const Post = (props: PropsType) => {

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

