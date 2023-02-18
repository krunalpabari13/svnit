import React from 'react'

export default function Mainimg() {
  return (
    <div >
        <img src={require('./carbooth.png')} className="img-fluid mt-2" style={{position:'relative'}}/>
        <button className='btn btn-success' style={{position:'absolute',top:'66%',right:'36%',height:'2.5rem', width:'8rem' }}>Book</button>
    </div>
  )
}
