/* import React from 'react'
import Navbar from './ContactAppRedux2/Navbar'
import {ToastContainer} from 'react-toastify'
import {Routes, Route} from 'react-router-dom'
import Home from './ContactAppRedux2/Home'
import AddContact from './ContactAppRedux2/AddContact'
import EditContact from './ContactAppRedux2/EditContact'
export default function App() {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}>
          </Route>
          <Route path='/add' element={<AddContact/>} >
          </Route>
          <Route path='/edit/:id' element={<EditContact/>}>
          </Route>
      </Routes>
    </div>
  )
} */

/* import React from 'react'
import {Provider} from "react-redux";
import rootReducer from './TodoRedux/root-reducer'
import { createStore,applyMiddleware,compose } from "redux";
import TodoList from './Todo/TodoList'
import TodoInput from './Todo/TodoInput'
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
const store = createStore(rootReducer,composeEnhancers(applyMiddleware()) );
function App() {
  return (
    <Provider store={store}>
      <div >
        <div >
          <div >
            
            <TodoList/>
            <TodoInput/>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App */


  import React from 'react'
import Header from './Components/Header'
import { Grid} from '@mui/material'
import ContactContainer from './Components/ContactContainer'
import { Routes, Route,} from "react-router-dom";
import {Provider} from "react-redux";
import rootReducer from './TodoRedux/root-reducer'
import Container from './Components/Container'
import { createStore } from "redux";
//import Todo from './Todo/Todo';
import {ToastContainer} from 'react-toastify'
import Navbar from './ContactAppRedux2/Navbar';
const store = createStore(rootReducer);
export default function App() {
  return (
    <div>  
    <Provider store={store}>

      <Header/>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
    <ContactContainer/>
    
    </Grid>
    
    <Grid item xs={6}>
       <Routes>
        <Route path="/Contact/:id" element= {<Container/>}/>
        <Route path="/Contactquery" element= {<Container/>}/>
      </Routes> 
      </Grid>
      </Grid>
      </Provider>
  <ToastContainer/>
    </div>
  )
} 
 