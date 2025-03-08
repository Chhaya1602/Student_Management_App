import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink,useNavigate, useParams } from 'react-router-dom'

const Delete = () => {
  const [student, setStudent] = useState('')

  const {studentID} = useParams()

  const navigate = useNavigate()

  async function getData () {
    const response = await axios.get(`http://localhost:8000/students/${studentID}`)

    const result = response.data
     setStudent(result)
  }

  useEffect (()=>{
    getData()
  },[])

  const deleteData = () => {
    axios.delete(`http://localhost:8000/students/${studentID}`)
    alert('Data Deleted')
    navigate('/show')
  }
  return (
    <div className='w-50 bg-primary rounded-4 mx-auto mt-5'>
        <h2>Delete Student Data - </h2>
        <h2>Student ID - {student.id}</h2>
        <h2>Student Name -{student.name}</h2>
        <h2>Student Email -{student.email}</h2>
        <div className='p-3'>
          <button type='submit' className='btn btn-danger me-3 w-25' onClick={deleteData}>YES</button>
          <NavLink to='/show'><button className='btn btn-warning me-3 w-25'>NO</button></NavLink>
        </div>

    </div>
  )
}

export default Delete