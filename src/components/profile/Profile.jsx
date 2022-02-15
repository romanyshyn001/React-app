import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './Myposts/MyPostsContainer'

const Profile = (props) => {

   return (
      <div >
         <ProfileInfo/>
         <MyPostsContainer posts={props.profilePage.posts}
                           dispatch={props.dispatch}
                           newPostText={props.profilePage.newPostText}/>
      </div>
   )
 
}
export default Profile;