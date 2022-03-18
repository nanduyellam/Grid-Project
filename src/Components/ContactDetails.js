import React from 'react'
import { Box, Paper, TableBody, TableContainer } from '@mui/material'
import { useParams } from 'react-router-dom';
import { Table, TableHead, TableRow, TableCell } from '@mui/material';
import {useSearchParams } from 'react-router-dom';
export default function ContactDetails() {
const [searchParams] = useSearchParams()
let params = useParams();
let id = params.id
const first = searchParams.get("name")
const last = searchParams.get("last")


  return (
    <div>
  {id ?<Box>
        ContactDetails
        <br/>
        <br/>
        <br/>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>FirstName</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
            
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {id}
              </TableCell>
              
              
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
        </Box>:''} 
        {first ?<Box>
        ContactList
        <br/>
        <br/>
        <br/>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align='left'>FirstName</TableCell>
            <TableCell align="left">LastName</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
            
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='left'>
                {first}
              </TableCell>
              <TableCell align="left">{last}</TableCell>
              
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>

        </Box>:''} 

        </div> 
  )
}