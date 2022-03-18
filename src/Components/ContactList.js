import React from 'react'
import {Data} from './data'
import { Box } from '@mui/material'
import {  Link } from "react-router-dom";
export default function ContactList ( {Checked})  {  
  return (
    <div > 
         <Box>
           
      {Data.map((contact) =>{
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