import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {composeWithDevTools} from 'redux-devtools-extension'
import{BrowserRouter} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import {createStore} from 'redux'
import ContactReducer from './ContactRedux/contactReducer';
import {Provider} from 'react-redux';
const store = createStore(ContactReducer, composeWithDevTools())
 ReactDOM.render(

  <React.StrictMode>
      <Provider store= {store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter> 
    </Provider>  
  </React.StrictMode>,
 
  document.getElementById('root')
);


