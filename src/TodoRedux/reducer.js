import {
    ADD_TODO,
    CLEAR_TODO_LIST,
    DELETE_TODO,
    TOGGLE_TODO,
    ADD_COUNTER
  } from "./actionTypes";
  const initalState = {
    counter: 0,
    /* list: [{ id: 0, text: "Happy Hacking ~v~", completed: false }],
       contact:[
      {
         "firstName": "nandini",
         "lastName": "Athota",
         "email": "nandiniathota@gmail.com",
         "phone": "248-703-9299",
         "id": 1
  
      },
      {
         "firstName": "nandu",
         "lastName": "Atha",
         "email": "nandini@gmail.com",
         "phone": "248-703-9999",
         "id": 2
      } */
  
  }; 
  
  const todos = (state = initalState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          counter: state.counter + 1,
          list: [
            ...state.list,
            { id: state.counter + 1, text: action.text, completed: false }
          ]
        };
    
            case ADD_COUNTER:
              return {
                amount: ++state.amount
              };
      case CLEAR_TODO_LIST:
        return initalState;
      case DELETE_TODO:
        return {
          ...state,
          list: state.list.filter(item => item.id !== action.id)
        };
      case TOGGLE_TODO:
        return {
          ...state,
          list: state.list.map(todo =>
            todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
          )
        };
      default:
        return state;
    }
  };
  
  export default todos;
  



  /* const intialState ={
    todos:[{id:1, task:"Wake Up", complete:false}],
};
const todosReducer = (state = intialState, action)=>{
    switch(action.type){
        case types.COMPLETE_TODO:
            return{
                ...state,
                todos:[...state.todos, action.payload],
            };
            case 'DELETE_TODO':
                return{
               ...state,
               todos:state.todos.filter(todo=> todo.id !== action.payload),
                }
            default:
                return state;
           }
};
export default todosReducer; */
/* import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
 
const middleware = [];
if(Process.env.NODE_ENV ==="development"){
    middleware.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store; //https://codesandbox.io/s/react-redux-todo-list-bnv8y?from-embed=&file=/src/index.js
 */