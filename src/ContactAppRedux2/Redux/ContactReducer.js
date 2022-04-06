const initialState= [
    {
        id:0,
        name:"nandini",
        email:"nandu@gmail.com"
    },
    {
        id:1,
        name:"karthik",
        email:"nanssfgu@gmail.com"
}
]
const ContactReducer =(state = initialState, action)=>{
    switch(action.type){
        case "ADD_CONTACT":
          state = [...state, action.payload]
          return state;
  default: 
  return state;    
}
}
export default ContactReducer;