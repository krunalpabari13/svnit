import React from 'react'
import './App.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map,{Marker} from "react-map-gl"
import Details from './Details'
export default function MapBox() {
  return (
    <>
    <Map mapboxAccessToken='pk.eyJ1Ijoia3J1bmFsMTIzNCIsImEiOiJjbGVhcmcwMTcwazQ5M3Bwbm9ieWdwYm90In0.Ss4Yvftiu2LdSkMYv9B1Wg'
    
    style={{width: 600, height: 400, borderRadius:'15px',border:'2px solid black',marginLeft:'30%'}}
    initialViewState={{longitude:21.1702,latitude:72.8311, zoom: 3.5, pitch:50}}
    mapStyle="mapbox://styles/mapbox/dark-v9"
    >
        <Marker longitude={72.8311} latitude={21.1702}> <img src={require('./icon/car.png')} width={30}/></Marker>
        <Marker longitude={72.8200} latitude={21.1000} anchor="bottom"> <img src={require('./icon/car.png')} width={30}/></Marker>
 
        <Marker longitude={72.8300} latitude={21.1500}></Marker>
 
    </Map> 
    <button className="btn  btn-rounded btn-outline-success mt-8" style={{marginLeft:'45%'}} >Book The Charge</button>
    <Details className="mt-4"></Details>
    </>
    )
}
