import s from './ProfileInfo.module.css'
import React from 'react';
import Preloader from '../../../Preloader/Preloader';

class ProfileStatus extends React.Component {
   state = {
      editMode: false
   }
//setState асинхронний
//    activateEditMode() {
//       this.setState({
//          editMode: true
//       })
// //this.forceUpdate()


//    }
   // deActivateEditMode() {
   //    this.setState({
   //       editMode: false
   //    })
   // }

   handleClick = () => {
      debugger
      this.setState(state => ({
         editMode: !state.editMode
      }))
   }

   render(){
      return (
         <div> {this.state.editMode ?  
               
               <div>
                  <input autoFocus={true} onBlur={this.handleClick.bind(this)} value={this.props.satus}/>
               </div>
               : 
               <div>
                  <span onDoubleClick={this.handleClick.bind(this)}>{this.props.status}</span>
               </div>
               }        
         </div>
      )
   }
}
export default ProfileStatus;