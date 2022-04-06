import React from 'react'

import { Box } from '@mui/material'
import {  Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function ContactList ( {Checked})  { 
  const  {contacts} = useSelector(state => state.contacts); 
console.log(contacts, '-------------')
  return (
    <div > 
      <Box>  
      {contacts.map((contact) =>{ 
        return(
            <div key={contact.id} >
             
              <Link to={Checked?`/Contact/` +contact.firstName: `/Contactquery?name=`+contact.firstName+`&last=`+contact.lastName}>
                {contact.firstName}</Link>  
          </div>   
        )
        
      })}
     
     </Box>   
   </div>
  )
}