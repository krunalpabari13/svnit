import React from 'react'

export default function Details() {
  return (
    <div className="card text-center mt-4 bg-dark">
    <div className="card-header">
      <ul className="nav nav-pills card-header-pills">
        <li className="nav-item">
          <a className="nav-link  " href="#">Driver Details</a>
        </li>
        <li className="nav-item " style={{marginLeft:'35%'}}>
          <a className="nav-link" href="#">Estimated Time</a>
        </li>
      </ul>
    </div>
    <div className="card-body">
    <ul className="nav nav-pills card-header-pills">
        <li className="nav-item">
          <a className="nav-link  " href="#">Name of Driver</a>
        </li>
        <li className="nav-item " style={{marginLeft:'34%'}}>
          <a className="nav-link" href="#">Arriving in 2 Minutes</a>
        </li>
      </ul>
      <ul className="nav nav-pills card-header-pills">
        <li className="nav-item">
          <a className="nav-link  " href="#">Contact-no of Driver</a>
        </li>
       
      </ul>
    </div>
  </div>
  )
}
