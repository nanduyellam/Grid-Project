import {combineReducers} from "redux";
import todosReducer from "./reducer";
import contactReducer from '../ContactRedux/contactReducer'
const rootReducer = combineReducers({
    todos:todosReducer,
    contacts:contactReducer 
});
export default rootReducer;