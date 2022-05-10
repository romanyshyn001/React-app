import axios from "axios"
import { follow, unfollow } from "../../redux/usersReducers"

const instance = axios.create({
  withCredentials:true,
  baseURL:`https://social-network.samuraijs.com/api/1.0/`,
  headers:{
    "API-KEY":"c9b3c716-611d-48c7-bad8-95668247cb2c"
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
      return instance.get(`profile/${userId}`
      )
   }
}


export const authAPI = {
  me(){
    return instance.get(`auth/me`, {
      withCredentials: true
    })
  }
}


