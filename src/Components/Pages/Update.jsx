import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const { register, handleSubmit, setValue } = useForm()
  const [cities,setCities] = useState([])

  const cityData = {
    Maharashtra : ['Pune', 'Mumbai', 'Nashik', 'Nagpur'],
    Gujrat : ['Ahmedabad', 'Rajkot', 'Gandhinagar', 'Surat'],
    Rajasthan : ['Jaipur', 'Ajmer', 'Udaipur', 'Bikaner'],
    UP : ['Agra', 'Lucknow', 'Varanasi', 'Kanpur']
  }

  const handleState = (e) =>{
    const selectedState = e.target.value
    setCities(cityData[selectedState] || [])
  }

  const { studentID } = useParams()
  const navigate = useNavigate()

  async function getData() {
    const result = await axios.get(`http://localhost:8000/students/${studentID}`)
    setValue('fname', result.data.fname)
    setValue('lname', result.data.lname)
    setValue('mother_name', result.data.mother_name)
    setValue('father_name', result.data.father_name)
    setValue('address', result.data.address)
    setValue('gender', result.data.gender)
    setValue('state', result.data.state)
    setValue('fname', result.data.fname)
    setValue('city', result.data.city)
    setValue('dob', result.data.dob)
    setValue('pincode', result.data.pincode)
    setValue('password', result.data.password)
    setValue('email', result.data.email)
  }

  useEffect(() => {
    getData()
  }, [])

  const updateData = (data) => {
    axios.put(`http://localhost:8000/students/${studentID}`, data)
    alert('Data Updated')
    navigate('/show')
  }

  return (
    <div>
      <h2>Students Profile</h2>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample " className="img-fluid myimage"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <form onSubmit={handleSubmit(updateData)}>
                        <h3 className="mb-5 text-uppercase">Student registration form</h3>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="form3Example1m" className="form-control form-control-lg"
                                {...register('fname')} required />
                              <label className="form-label" htmlFor="form3Example1m">First name</label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="form3Example1n" className="form-control form-control-lg"
                                {...register('lname')} required />
                              <label className="form-label" htmlFor="form3Example1n">Last name</label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="form3Example1m1" className="form-control form-control-lg"
                                {...register('mother_name')} />
                              <label className="form-label" htmlFor="form3Example1m1">Mother's name</label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input type="text" id="form3Example1n1" className="form-control form-control-lg"
                                {...register('father_name')} />
                              <label className="form-label" htmlFor="form3Example1n1">Father's name</label>
                            </div>
                          </div>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form3Example8" className="form-control form-control-lg"
                            {...register('address')} />
                          <label className="form-label" htmlFor="form3Example8">Address</label>
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                          <h6 className="mb-0 me-4">Gender: </h6>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                              value="female" {...register('gender')} />
                            <label className="form-check-label" htmlFor="femaleGender">Female</label>
                          </div>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                              value="male" {...register('gender')} />
                            <label className="form-check-label" htmlFor="maleGender">Male</label>
                          </div>

                          <div className="form-check form-check-inline mb-0">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                              value="other" {...register('gender')} />
                            <label className="form-check-label" htmlFor="otherGender">Other</label>
                          </div>

                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">

                            <select data-mdb-select-init {...register('state')}>
                              <option value="">State</option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Gujrat">Gujrat</option>
                              <option value="Rajasthan">Rajasthan</option>
                            </select>

                          </div>
                          <div className="col-md-6 mb-4">

                            {/* <select data-mdb-select-init {...register('city')}>
                              <option value="">City</option>
                              <option value="Pune">Pune</option>
                              <option value="Surat">Surat</option>
                              <option value="Jaipur">Jaipur</option>
                            </select> */}

                          <select data-mdb-select-init {...register('city')}>
                                  <option value="">City</option>
                                  {
                                    cities.map((city,index)=>{
                                      return <option key={index} value={city}>{city}</option>
                                  })
                                  }
                          </select>

                          </div>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form3Example9" className="form-control form-control-lg" {...register('dob')} />
                          <label className="form-label" htmlFor="form3Example9">DOB</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form3Example90" className="form-control form-control-lg" {...register('pincode')} />
                          <label className="form-label" htmlFor="form3Example90">Pincode</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form3Example99" className="form-control form-control-lg" {...register('password')} />
                          <label className="form-label" htmlFor="form3Example99">Password</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="text" id="form3Example97" className="form-control form-control-lg" {...register('email')} />
                          <label className="form-label" htmlFor="form3Example97">Email ID</label>
                        </div>

                        <div className="d-flex justify-content-end pt-3">
                          <button type="reset" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>
      <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2">Update form</button>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Update