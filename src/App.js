import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import Profile from './components/profile/Profile';
import {Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/dialogContainer';
import React from 'react';
import UsersContainer from './components/Users/UsersContainer';
import Users from './components/Users/Users'


const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
             <Route path='/Dialogs' 
                    element={<DialogsContainer />} />
             <Route path='/Profile' 
                    element={<Profile/>} /> 
             <Route path='/users' 
                    element={<UsersContainer/>} /> //виправити
          </Routes>
        </div>
        </div>
  );
}

export default App;
