import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className='container'>
    <div className='row'>
    <div className='col-md-12 text-right'>
        <Link to='/add' className='btn btn-outline-dark '> Add Contact</Link>
    <div className='col-md-6 mx-auto'>
     <h1>Welcome to the Home Page</h1>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Home