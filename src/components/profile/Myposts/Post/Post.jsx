import s from './Post.module.css';

const Post = (props) => {
        
        return (
        <div className={s.item}>
                <img className={s.images} src='https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-11.png' alt='avatar'></img> 
                {props.message}
                <div>
                <span>like {props.likesCount}</span>
                </div>
        </div>
        
        )
        
}

export default Post;

