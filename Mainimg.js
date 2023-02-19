import React from 'react'
import './index.css'
import {Link} from 'react';
import MapBox from './Mapbox';
export default function Mainimg() {
  const redirect=()=>{
    window.location.href='/Mapbox'
  }
  return (
    <div  style={{marginTop:'1%'}}>
        <img src={require('./carbooth.png')} className="img-fluid mt-2" style={{position:'relative'}}/>
             
         <button className='btn btn-success' style={{position:'absolute',top:'65%',right:'36%',height:'2.5rem', width:'8rem' }} onClick={redirect}> Book</button>
      
    </div>
  )
}
