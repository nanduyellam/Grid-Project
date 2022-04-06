import React,{useState} from 'react'
import ContactDetails from './ContactDetails'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import {useSearchParams } from 'react-router-dom';
import { addConatcts } from '../ContactRedux/contactAction';
export default function Container() {
    const  {contacts}  = useSelector(state => state.contacts);
    const [define , setdefine]= useState(false)
   const [form, setForm]= useState({
      fName:"",
      lName:'',
      phone:'',
      email:''
    }) 
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams()
let params = useParams();
let id = params.id
const first = searchParams.get("name")
 var contactdetails = {}
if (id){
   contactdetails = contacts.find(at=>at.firstName== id)
}else{
  contactdetails = contacts.find(at=>at.firstName== first)
}
 /* const handleChange=e=>{
  setForm({
    // ...form,
    [e.target.name] : e.target.value,

  })
  console.log(form,'formlock')
}  */
const submitValue = () => {
  const frmdetails = {
      'FirstName' : form.fName,
      'LastName' : form.lName,
      'phone' : form.phone,
      'email' : form.email
  }
  console.log(frmdetails);
   dispatch(addConatcts(frmdetails));
   setForm({
      fName:"",
      lName:'',
      phone:'',
      email:''
   })
  setdefine(!define)
}

  return (
    <div>
      <div style={{ display: "flex" }}>
        <button style={{ marginLeft: "auto" }} onClick={()=>setdefine(!define)}>Add Contact</button>
      </div>
        <br/><br/>
       {define?
       <div>
    <input type="text" placeholder="First Name" onChange={({target})=> 
    setForm(state=>({...state, fName:target.value}))} value={form.fName}/><br/> 
    <input type="text" placeholder="Last Name" onChange={({target})=> 
    setForm(state=>({...state, lName:target.value}))} value={form.lName} /><br/>
    <input type="text" placeholder="Phone" onChange={({target})=> 
    setForm(state=>({...state, phone:target.value}))} value={form.phone} /><br/>
    <input type="text" placeholder="Email" onChange={({target})=> 
    setForm(state=>({...state, email:target.value}))} value={form.email}/><br/>
    <button onClick={submitValue}>Submit</button>
       </div>:
       Object.keys(contactdetails).length>0? <ContactDetails  contact={contactdetails}/>:''}
    </div>
  )
}
