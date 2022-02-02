import { rerenderEntireTree } from './../render'; 

let state = {
    profilePage: {
        posts:[
            {id:1, message:'Hi', likesCount:12},
            {id:2, message:'How is going?', likesCount:12},
            {id:3, message:'What the plan', likesCount:15},
            {id:4, message:'Bingo', likesCount:16},
            {id:5, message:'Great Job!', likesCount:2}
        ],
        newPostText:'Hello Warrior!'
    },
    dialogPage:{
        dialogsData:[
            {id:1, name:'Roman'},
            {id:2, name:'Victor'},
            {id:3, name:'Vasya'},
            {id:4, name:'Ivan'},
            {id:5, name:'Sergiy'}
        ],
        messageData: [
            {id:1, message:'Hi'},
            {id:2, message:'How is going?'},
            {id:3, message:'What the plan'},
            {id:4, message:'Bingo'},
            {id:5, message:'Great Job!'}
        ]  
    }
  }
window.state = state

export let addPost = () => {
    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likesCount:1
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state;