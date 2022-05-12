import ProfileInfo from './Myposts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './Myposts/MyPostsContainer'
import React from 'react';

const Profile = (props) => {
   return (
      <div >
         <ProfileInfo profile={props.profile} {...props}/> 
         {/* status={props.status} updateStatus={props.updateStatus} */}
         <MyPostsContainer  />
      </div>
   )
 
}
export default Profile;