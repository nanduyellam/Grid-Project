import React from 'react'
import { Box, Paper, TableBody, TableContainer } from '@mui/material'

import { Table, TableHead, TableRow, TableCell } from '@mui/material';
import { useDispatch } from 'react-redux';
import {deleteContacts} from '../ContactRedux/contactAction'

export default function ContactDetails({contact, id}) {
 const dispatch = useDispatch();
    const handleDelete = (id) => {
    dispatch(deleteContacts(id));
  }; 
  return (
    <div>
  {/* {id ? */}<Box>
        ContactDetails
        <br/>
        <br/>
        <br/>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
        <TableRow>
            <TableCell align='left'>FirstName</TableCell>
            <TableCell align="left">LastName</TableCell>
            <TableCell align='left'>email</TableCell>
            <TableCell align="left">phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
    
        <TableRow>
              <TableCell align='left'>{contact.firstName}</TableCell>
              <TableCell align="left">{contact.lastName}</TableCell>
              <TableCell align='left'>{contact.email}</TableCell>
              <TableCell align="left">{contact.phone}</TableCell>
              <button type="button" onClick={() => handleDelete(contact.id)}
>Delete</button> 
            </TableRow>
         
        </TableBody> 
      </Table>
    </TableContainer>
        </Box> 
       

    </div> 
  )
}