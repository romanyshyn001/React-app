import axios from "axios"

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
    unfollow: (userId = 1) => {  
      return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data
      })

},
    follow: (userId = 2) => {
      return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data
      })
    }
}


