import React from "react";
import styles from './users.module.css'


let Users = (props) => {
  if(props.users.length === 0){
  props.setUsers([
    {id: 0, fullname:'Roman', status: 'I am a boss', followed: false, 
    location: {city: 'Lviv', country: 'Ukraine'}, photoUrl:'https://tinyurl.com/38k34dyc'},
    {id: 1, fullname:'Sasha', status: 'I am robot', followed: true,
    location: {city: 'Novhorod', country: 'Ukraine'}, photoUrl:'https://tinyurl.com/38k34dyc'},
    {id: 2, fullname:'Vira', status: 'I am son', followed: false,
    location: {city: 'Kyiv', country: 'Ukraine'}, photoUrl:'https://tinyurl.com/38k34dyc'}
  ])}

  return <div>
    {
      props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="img"  className={styles.userPhoto}/>
            </div>
            <div>
              { u.followed
                ? <button onClick={() => props.follow(u.id)}>Follow</button>
                : <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              }
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullname}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>)
    }
  </div>
}

export default Users











// import React from "react";

// let Users = (props) => {
//     let allUsers = props.store.users
//     window.allUsers = allUsers
//   return (
//     <React.Fragment>
//       <div>hello</div>
//       <div>how are you?</div>
//     </React.Fragment>
//   )
// }
// export default Users

// // return <div>
// //     {
// //       props.users.map(u => <div key={u.id}>
// //         <span>
// //           <div>
// //             {/* <img src={u.photoUrl}  /> */}
// //           </div>
// //           <div>
// //             <button>Follow</button>
// //           </div>  
// //         </span>
// //         <span>
// //           <span>
// //             <div>{u.fullname}</div>
// //             <div>{u.status}</div>
// //           </span>
// //           <span>
// //             <div>{u.location.country}</div>
// //             <div>{u.location.city}</div>
// //           </span>
// //         </span>
        
// //       </div>)
// //     }
// //     </div>
// // }