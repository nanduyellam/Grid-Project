import React,{useState} from 'react'
import { Grid } from '@mui/material'
import ContactDetails from './ContactDetails'
import ContactList from './ContactList'
export default function ContactContainer() {
    const[data, setData] = useState({}) 

  return (
    <div>
     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <ContactList handleData={setData}></ContactList>
  </Grid>

  <Grid item xs={6}>
    <ContactDetails Contact={data}></ContactDetails>
  </Grid>
  </Grid>

    </div>
  )
}
