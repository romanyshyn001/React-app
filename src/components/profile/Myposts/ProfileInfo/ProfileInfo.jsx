import s from './ProfileInfo.module.css'
import React from 'react';
const ProfileInfo = () => {
    return (
        <div>
            <div>       
                <img className={s.images} src='http://destinationtci.tc/wp-content/uploads/2016/09/solitude-beaches-in-turks-and-caicos-islands-1200x480.jpg' alt='background'></img>
            </div>
            <div className={s.description}>
                Ava + description
            </div>
       </div>
    )
}

export default ProfileInfo;