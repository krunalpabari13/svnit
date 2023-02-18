import React from 'react'
import './index.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  nav-height">
        <a className="font-height  font-weight-bold mt-2 " style={{color:'white'}} >Charger</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse margin-left" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link font-weight-bold font-height mx-3 btn" >Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link font-weight-bold font-height mx-3 btn" >About</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link font-weight-bold font-height btn mx-3" >Carrer</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link  font-weight-bold font-height btn mx-3" >Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>

  )
}
