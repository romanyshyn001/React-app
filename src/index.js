import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


export let rerenderEntireTree = (_state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} 
           dispatch={store.dispatch.bind(store)}
           store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store._state);
store.subscribe(rerenderEntireTree)

reportWebVitals();
