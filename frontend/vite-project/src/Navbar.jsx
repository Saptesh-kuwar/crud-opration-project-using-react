import React, { useState } from "react"
import { NavLink } from "react-router-dom"


export default function Navbar() {
  

  return (
    <>
    
    <>
  {/* Hello world */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand px-4" href="#">
      <span className="text-danger text-bold fs-3 bold">SARA</span>   CLASSES
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mx-4 ">
          <li className="nav-item ">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/Student/new">
              Createstudent
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/Students">
              All student
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              to="/Service"
              tabIndex={-1}
              aria-disabled="true"
            >
              Services
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</>
 
      {/*<!-- End Basic Navbar--> */}
    </>
  )
}