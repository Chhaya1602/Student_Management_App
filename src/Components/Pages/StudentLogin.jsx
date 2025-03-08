import axios from 'axios'
import React, { useState } from 'react'
import StudentDetails from './StudentDetails'

const StudentLogin = () => {

    const[ email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[LoggedIn, setloggedIn] = useState()

    async function handleLogIn () {
      const response = await axios.get('http://localhost:8000/students')
      const result = response.data
      const Student = result.find((stu)=>stu.email === email && stu.password ===password)

      if(Student){
        setloggedIn(Student)
        alert('Login Successfull !!!')
      }else{
        alert('Wrong Username and Password')
        setEmail('')
        setPassword('')
      }
    }

    const handleLogOut = () => {
        setloggedIn()
        setEmail('')
        setPassword('')
    }
    if(LoggedIn){
        return <StudentDetails student={LoggedIn} onLogout={handleLogOut}/>
    }
  return (
    <div>
        <h2>StudentLogin</h2>
        <div className='w-50 bg-warning p-3 rounded-4 mx-auto mt-5 text-center'>
            <input type='text' 
                   className='form-control mb-3'
                   placeholder='enter Your Email'
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   />
            <input type='password' 
                   className='form-control mb-3'
                   placeholder='enter Your password'
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                   />
            <button className='btn btn-success'onClick={handleLogIn}>LOGIN</button>
        </div>
    </div>
  )
}

export default StudentLogin