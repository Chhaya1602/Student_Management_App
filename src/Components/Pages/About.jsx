import React from 'react'


const Admin = () => {
  return (
    <div>
      <h2>ADMIN LOGIN PAGE</h2>
      <div className='bg-warning w-50 mx-auto p-4 text-center mt-5 rounded-4'>
          <input type='text' placeholder='Enter Username' className='form-control mb-3 p-3'/>
          <input type='password' placeholder='Enter Password' className='form-control mb-3 p-3'/>
          <button className='btn btn-success w-25'>LOGIN</button>
      </div>
    </div>
  )
}


export default Admin

