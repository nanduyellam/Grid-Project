import { ADD_CONTACTS, DELETE_CONTACTS } from "./contactActiontype";
const initalState = {
  counter: 2,
  contacts: [
    {
      firstName: "nandini",
      lastName: "Athota",
      email: "nandiniathota@gmail.com",
      phone: "248-703-9299",
      id: 1,
    },
    {
      firstName: "nandu",
      lastName: "Atha",
      email: "nandini@gmail.com",
      phone: "248-703-9999",
      id: 2,
    },
  ],
};
const contactReducer = (state = initalState, action) => {
  console.log(action, "nan");
  switch (action.type) {
    case ADD_CONTACTS:
      return {
        counter: state.counter + 1,
        contacts: [
          ...state.contacts,
          {
            id: state.counter + 1,
            firstName: action.text.FirstName,
            lastName: action.text.LastName,
            email: action.text.email,
            phone: action.text.email,
          },
        ],
      };

    case DELETE_CONTACTS:
      console.log(action.id, "cha");
      return {
        ...state,
        contact: state.contacts.filter((contacts) => contacts.id !== action.id),
      };
    default:
      return state;
  }
};

export default contactReducer;
