import React from 'react'
import './index.css'
export default function Card(props) {
  return (
    <>
        <div className="card container inline-block mt-8" style={{width: '19rem',background: '#353839',color:'whitesmoke'}}>
    {   props.img && <img src={props.img}   width='100'></img>}
        <div className="card-body">
       {  props.title && <h5 className="card-title">{props.title}</h5>}
          <p className="card-text">{props.message}</p>
        </div>
      </div>
    </>
  )
}
