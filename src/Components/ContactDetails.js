import React from 'react'
import { Box } from '@mui/material'
export default function ContactDetails({Contact}) {
  console.log(Contact, 'charan')
  return (
    <div>
  <Box>
        ContactList
        <br/>
        <br/>
        <br/>
           FirstName: {Contact.firstName}
           <br/>
        LastName:{Contact.lastName}
        <br/>
        Email:{Contact.email}
        <br/>
        Phone:{Contact.phone} 
        <br/>
        </Box></div> 
  )
}