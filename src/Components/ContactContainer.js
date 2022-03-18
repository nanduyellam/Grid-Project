import React,{useState} from 'react'
import ContactList from './ContactList'
import { ListItem , List} from '@mui/material';
export default function ContactContainer() {
  const[CheckedOne, setCheckedOne] = useState(false) 
  return (
    <div>
    
  <input type="checkbox" Checked={CheckedOne} onChange={()=> setCheckedOne(!CheckedOne)}/> Checkbox 
     <List>
       <ListItem disablePadding>
    <ContactList Checked={CheckedOne} ></ContactList> 
   </ListItem>
   </List>
    </div>
  )
}
