import React from 'react'
import './index.css'
// import Mainimg from './Mainimg'
import Card from './Card'
import Headtext from './Headtext'
import Text2 from './Text2'
import Mainimg from './Mainimg'
import Mainimg2 from './Mainimg2'
import img1 from './icon/charging.png'
import img2 from './icon/high-quality.png'
import img3 from './icon/public-service.png'
export default function Navbar() {
  return (<>
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

<Mainimg ></Mainimg>
<Headtext ></Headtext>
<div className='row'>
<Card className='col-sm-4' title='Super-quick chargin' img={img1} message='In about 45 minutes, your electric vehicle will receive a quality charge'></Card>
<Card className='col-sm-4' title='Smart & TrustWorthy' img={img2} message='Your charging needs are monitored and managed real time.'></Card>
<Card className='col-sm-4' title='Demand-Based Servie' img={img3} message='Whereever you go, whenever you want charge, you can charge  your electric car'> </Card>
</div>
<Text2></Text2>
<Mainimg2></Mainimg2>
<div className='row mt-8'>
<Card className='col-sm-4'  message='We believe in achieving greatness through sustainablity'></Card>
<Card className='col-sm-4' message='Our focus on flourishing goes hand in hand with an equally steady footing with patience and cosistency'></Card>
<Card className='col-sm-4' message='We assume the responsibility of supporting a greener lifestyle that does not create suffering for future generations.'> </Card>
<Card className='col-sm-4' message='We work towards a goalwe are passionate about.Thats what pushes usforward every day and takes up new challenges to keep ourselves on our toes..'> </Card>
</div>
<br></br>
</>
  )
}
