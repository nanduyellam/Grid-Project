import React from 'react'
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
            {/* <h1 className="text-capitalize text-center">Kelvin Todo List</h1> */}
            <TodoList/>
            <TodoInput/>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;


/*  import React from 'react'
import Header from './Components/Header'
import { Grid} from '@mui/material'
import ContactContainer from './Components/ContactContainer'
import { Routes, Route,} from "react-router-dom";
import ContactDetails from './Components/ContactDetails';  
import Todo from './Todo/Todo'
export default function App() {
  return (
    <div>  
      <Header/>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
    <ContactContainer/>
    
    </Grid>
    
    <Grid item xs={6}>
       <Routes>
        <Route path="/Contact/:id" element= {<ContactDetails/>}/>
        <Route path="/Contactquery" element= {<ContactDetails/>}/>
      </Routes> 
      </Grid>
      </Grid>
      <Todo/>
    </div>
  )
}  */