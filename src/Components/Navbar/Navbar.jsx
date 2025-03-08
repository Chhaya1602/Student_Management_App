import { NavLink } from "react-router-dom"
import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fw-bold text-warning fs-4" to="/home">WELCOME</NavLink>
                    <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold fs-4 text-light " aria-current="page" to="/home">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold fs-4 text-light" aria-current="page" to="/about">About</NavLink>
                            </li>

                            <li className="nav-item p-0 me-3">
                                <NavLink className="nav-link fw-bold fs-4 text-light" to="/register">Register</NavLink>
                            </li>

                            <li className="nav-item me-2">
                              <NavLink className="nav-link fw-bold fs-4 text-light" to="/admin">Admin</NavLink>
                            </li>

                            <li className="nav-item me-2">
                              <NavLink className="nav-link fw-bold fs-4 text-light" to="/studentlogin">Student Login</NavLink>
                            </li>

                            {/* <li className="nav-item  p-0">
                               <NavLink className="nav-link fw-bold fs-4 text-light" to="/show">Show</NavLink>
                            </li> */}

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar