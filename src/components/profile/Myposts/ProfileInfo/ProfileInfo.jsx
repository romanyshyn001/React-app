import s from './ProfileInfo.module.css'
import React from 'react';
import Preloader from '../../../Preloader/Preloader';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            {/* <div>       
                <img className={s.images} src='http://destinationtci.tc/wp-content/uploads/2016/09/solitude-beaches-in-turks-and-caicos-islands-1200x480.jpg' alt='background'></img>
            </div> */}
            <div className={s.description}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus {...props}/>
            </div>
       </div>
    )
}

export default ProfileInfo;