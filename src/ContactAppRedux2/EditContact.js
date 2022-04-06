import React from 'react'
import {Link,useParams} from 'react-router-dom' // useparams is to get the params from router-dom
function EditContact() {
    const{id} = useParams();
    return (   
        <div className='container'>
   <div className='row'>
   <h1 className='display-3 text-center my-5'>
       Add Contact {id}
       </h1>
   <div className='col-md-6  shadow mx-auto p-5'>
    <form>
        <div className='form-group'>
          <input type="text" placeholder='Name' className='form-control'/>
        </div>
        <div className='form-group'>
          <input type="email" placeholder='Email' className='form-control'/>
        </div>
        <div className='form-group'>
          <input type="submit" value='Update student' className='btn btn-block btn-dark'/>
          <Link to='/' className='btn btn-danger ml-6'> Cancel</Link>
        </div>
    </form>
   </div>
   </div>
   </div>
   
 )
}

export default EditContact