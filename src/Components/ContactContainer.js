import React,{useState} from 'react'
import { Grid } from '@mui/material'
import ContactDetails from './ContactDetails'
import ContactList from './ContactList'
export default function ContactContainer() {
    const[selectcontact, setSelectcontact] = useState({}) 

  return (
    <div>
     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <ContactList handleData={setSelectcontact}></ContactList>
  </Grid>

  <Grid item xs={6}>
    <ContactDetails Contact={selectcontact}></ContactDetails>
  </Grid>
  </Grid>

    </div>
  )
}
