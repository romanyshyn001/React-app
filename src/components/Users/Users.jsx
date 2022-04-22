import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from '../../assets/images/userPhoto.png';
import styles from './users.module.css';


let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for(let i = 1; i <= pagesCount; i++){
    pages.push(i)
  }
 //debugger
 return (<React.Fragment>
      <div>
        { pages.map(p => {
//          debugger;
            return <span className={props.currentPage === p  && styles.selectedPage} 
                         onClick={(e) => {props.onPageChanged(p)}} key={p.id}>{p}</span>
        })}
      </div>
      {
          props.users.map(u => <div key={u.id}>
              <span>
                <div>
                  <NavLink to={'./../profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="img"  className={styles.userPhoto}/>
                  </NavLink>
                </div>
                <div>
                  { u.followed
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} 
                    onClick={() => { props.unfollow(u.id) }} 
                    >Unfollow</button>  
                    : <button disabled={props.followingInProgress.some(id => id === u.id)} 
                    onClick={() => { props.follow(u.id)}}>Follow</button>     
                  }
                </div>
              </span>
              <span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{'u.location.country'}</div>
                  <div>{'u.location.city'}</div>
                </span>
              </span>
            </div>)
        }
      </React.Fragment>
 )}
export default Users;