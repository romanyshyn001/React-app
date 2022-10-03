import axios from "axios"
import { follow, unfollow } from "../../redux/usersReducers"

const instance = axios.create({
  withCredentials:true,
  baseURL:`https://social-network.samuraijs.com/api/1.0/`,
  headers:{
    "API-KEY":"add5d5d4-dea4-4fa0-816f-6d976a407dfa",
    "Content-Type": "application/json"
  }
})

export const  usersAPI = {
   getUsers: async(currentPage = 1, pageSize = 10) => { 
      return await instance.get(`users?page=${currentPage}&count=${pageSize}`, 
      )
      .then(response => {
        return response.data
      })
},
   unfollow: async(userId ) => {  
      return await instance.delete(`follow/${userId}`)
         // .then(response => {
         //    if(response.data.resultCode === 0){
         //       unfollow(userId)
         //    }
         // })
},
   follow: async(userId) => {
      return await instance.post(`follow/${userId}`)
         // .then(response => {
         //    if(response.data.resultCode === 0){
         //       follow(userId)
         //    }
         // })
},
   getProfile: async(userId) => {
      return await profileAPI.getProfile(userId)
   }
}

export const profileAPI = {
   getProfile: async(userId) => {
      return await instance.get(`profile/`+ userId)
   },
   getStatus: async(userId) => {
      return await instance.get(`profile/status/` + userId)
   },
   updateStatus: async(status) => {
      return await instance.put(`profile/status`, {status:status})
   }
}

export const authAPI = {
   async me(){
      return await instance.get(`auth/me`) 
  },
   async login(values){
      return await instance.post(`auth/login`, values)
  },
   async logout(){
      return await instance.delete(`auth/login`).then(res => { return res.data})
}
}
