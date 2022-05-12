import s from './ProfileInfo.module.css'
import React from 'react';
import Preloader from '../../../Preloader/Preloader';

class ProfileStatus extends React.Component {
   //statusInputRef = React.createRef()
   state = {
      editMode: false,
      status: this.props.status
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
      //debugger
      this.setState(state => ({
         editMode: !state.editMode
      }))
      //this.props.updateStatus(this.state.status)
      this.props.updateStatus(this.state.status)
   }

   // onStatusChange  (e)  {
   //    this.setState({
   //       status: e.currentTarget.value
   //    })
      
   // }

   onStatusChange(event){
      this.setState({
         status: event.target.value
      })
   }

   render(){
      //debugger
      return (
         <div> {!this.state.editMode             
               ?  
                  <div>
                     <span onDoubleClick={this.handleClick.bind(this)}>{this.props.status || '-----'}</span>
                  </div>   
               :  
                  <div>
                     <input onBlur={this.handleClick.bind(this)} value={this.state.status}
                            autoFocus={true} onChange={this.onStatusChange.bind(this) }>
                     </input>
                  </div>
               }        
         </div>
      )
   }
}
export default ProfileStatus;

// ?  
               // <div>
               //    <span onDoubleClick={this.handleClick.bind(this)} >{this.props.status || '------'}</span>
               // </div>
               // :
               // <div>
               //    <input onChange={this.onStatusChange.bind(this)} autoFocus={true} 
               //    onBlur={this.handleClick.bind(this)} value={this.state.status}/>
               // </div>