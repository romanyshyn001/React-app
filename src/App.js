import './App.css';
import NavBar from './components/navBar/NavBar';
import {Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/dialogContainer';
import React from 'react';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/profile/Myposts/ProfileInfo/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';


const App = () => {
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
             <Route path='/dialogs' 
                    element={<DialogsContainer />} />
             <Route path='/profile/' element={<ProfileContainer/>} /> 
             <Route path="/profile/:userId" element={<ProfileContainer />} />
             <Route path='/users' 
                    element={<UsersContainer/>} /> 
          </Routes>
        </div>
        </div>
  );
}

export default App;
