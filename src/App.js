import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import Profile from './components/profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialog';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
             <Route path='/Dialogs/*' 
                element={<Dialogs 
                  state={props.state.dialogPage} />} />
                
             <Route path='/Profile/*' 
                element={<Profile 
                  profilePage={props.state.profilePage} 
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}/>} /> 
          </Routes>
        </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
