import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import Profile from './components/profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/dialogContainer';




const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
             <Route path='/Dialogs/*' 
                element={<DialogsContainer
                  store={props.store}/>} />
                
             <Route path='/Profile/*' 
                element={<Profile 
                profilePage={props.state.profilePage} 
                dispatch={props.dispatch}
                newPostText={props.state.profilePage.newPostText}/>} /> 
          </Routes>
        </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
