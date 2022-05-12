import axios from "axios"
import { follow, unfollow } from "../../redux/usersReducers"

const instance = axios.create({
  withCredentials:true,
  baseURL:`https://social-network.samuraijs.com/api/1.0/`,
  headers:{
    "API-KEY":"add5d5d4-dea4-4fa0-816f-6d976a407dfa"
  }
})

export const  usersAPI = {
   getUsers: (currentPage = 1, pageSize = 10) => { 
      return  instance.get(`users?page=${currentPage}&count=${pageSize}`, 
      )
      .then(response => {
        return response.data
      })
},
   unfollow: (userId ) => {  
      return instance.delete(`follow/${userId}`)
         .then(response => {
            if(response.data.resultCode === 0){
               unfollow(userId)
            }
         })
},
   follow: (userId) => {
      return instance.post(`follow/${userId}`)
         .then(response => {
            if(response.data.resultCode === 0){
               follow(userId)
            }
         })
},
   getProfile: (userId) => {
      console.warn('Obsolete method ')
      return profileAPI.getProfile(userId)
   }
}

export const profileAPI = {
   getProfile: (userId) => {
      return instance.get(`profile/`+ userId)
   },
   getStatus: (userId) => {
      return instance.get(`profile/status/` + userId)
   },
   updateStatus: (status) => {
      return instance.put(`profile/status`, {status:status})
   }
}






// export const  profileAPI = {
//    getProfile (userId) {
//       return instance.get(`profile/`+ userId)
//    },
//    getStatus (userId) {
      
//       return instance.get(`profile/status/`+ userId)
//    },
//    updateStatus (status)  {
      
//       return instance.put(`profile/status`, {status: status})
         
//    }
// }



export const authAPI = {
  me(){
    return instance.get(`auth/me`, {
      withCredentials: true
    })
  }
}