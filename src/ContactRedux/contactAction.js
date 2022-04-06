import { ADD_CONTACTS,DELETE_CONTACTS } from "./contactActiontype";


export const addConatcts = text => {
    return {
      type: ADD_CONTACTS,
      text
    };
  };
  export const deleteContacts = id => {
    return {
      type: DELETE_CONTACTS,
      id
    };
  };
  