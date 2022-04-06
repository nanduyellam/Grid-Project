import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import { toast } from 'react-toastify';
function AddContact() {
  const list = useSelector((state)=> state);
  console.log(list, 'nan')
  const[input, setInput] = useState({
    name:'',
    email:''
  })
 
  const handleSubmit = e =>{
    e.preventDefault();
    const checkEmail= list.find((contact)=> contact.list.email === list.email && contact )
    if (checkEmail){
      return toast.error("This email is already exists!")
    }
    const data = {    // in readucer we add ADD-CONTACT in case here we have to get the last element id
    id: list[list.length - 1].id + 1 // length-1 is to get array of last element id and +1 is to add new
  
    }
    }
  
  return (   
         <div className='container'>
    <div className='row'>
    <h1 className='display-3 text-center my-5'>
        Add Contact
        </h1>
    <div className='col-md-6  shadow mx-auto p-5'>
     <form onSubmit={handleSubmit}>
         <div className='form-group'>
           <input type="text" placeholder='Name' value={input.name} className='form-control' onChange={(e)=>setInput(e.target.value)}/>
         </div>
         <div className='form-group'>
           <input type="email" placeholder='Email' className='form-control' value={input.email} onChange={(e)=>setInput(e.target.value)}/>
         </div>
         <div className='form-group'>
           <input type="submit" value='Add student' className='btn btn-block btn-dark'/>
         </div>
     </form>
    </div>
    </div>
    </div>
    
  )
}

export default AddContact