import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './Myposts/MyPostsContainer'
import React from 'react';
const Profile = (props) => {

   return (
      <div >
         <ProfileInfo/>
         <MyPostsContainer  />
      </div>
   )
 
}
export default Profile;