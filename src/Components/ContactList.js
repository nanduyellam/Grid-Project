import React from 'react'
//import "./App.css";
import {Data} from './data'
import { Box } from '@mui/material'
export default function ContactList ({ handleData })  {  
  /* const  contactHandler = (data)=>{
    console.log('nandu',data);
    handleData(data);
  } 
   */
  return (
    <div > 
         <Box>
      {Data.map((contact) =>{
        return(
          //<div key={contact.id} onClick={() => { contactHandler(contact) }}>
            <div key={contact.id} onClick={() => handleData(contact) }>
          {contact.firstName}
          
          </div>
        )
      })}
   </Box>
   </div>
  )
}