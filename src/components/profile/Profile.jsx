import MyPosts from './Myposts/MyPosts'
import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo';

const Profile = (props) => {
// let posts = [
//    {id:1, message:'Hi', likesCount:12},
//    {id:2, message:'How is going?', likesCount:12},
//    {id:3, message:'What the plan', likesCount:15},
//    {id:4, message:'Bingo', likesCount:16},
//    {id:5, message:'Great Job!', likesCount:2}]

   return (
      <div >
         <ProfileInfo/>
         <MyPosts posts={props.profilePage.posts} 
                  addPost={props.addPost}
                  newPostText={props.profilePage.newPostText}
                  updateNewPostText={props.updateNewPostText}/>
      </div>
   )
}
export default Profile;