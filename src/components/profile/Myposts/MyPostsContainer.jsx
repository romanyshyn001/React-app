import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addNewPost: () => {
         dispatch(addPostCreator())
      },
      updateNewPost: (body) => {
         dispatch(updateNewPostTextCreator(body))
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

// const MyPostsContainer = (props) => {

//       return (
//          <StoreContext.Consumer>
//             {
//                (store) => {
//                   let addPost = () => {
//                      store.dispatch(addPostCreator())   
//                   }
//                   let onPostChange = (body) => {
//                      store.dispatch(updateNewPostTextCreator(body))
                     
//                   }

//                   let state = store.getState()
                  
//                   return   <MyPosts addNewPost={addPost}
//                               updateNewPost={onPostChange}
//                               newPostText={state.profilePage.newPostText}
//                               posts={state.profilePage.posts}/>
//                }}
//          </StoreContext.Consumer>
//       )
//    }
export default MyPostsContainer;