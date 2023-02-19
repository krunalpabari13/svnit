import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Mainimg from './Mainimg';
import Headtext from './Headtext';
import Card from './Card';
import img1 from './icon/charging.png'
import img2 from './icon/high-quality.png'
import img3 from './icon/public-service.png'
import Text2 from './Text2';
import Mainimg2 from './Mainimg2';
import Redirect from './Redirect';
import Mapbox from './Mapbox';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Loginform from './Loginform';
function App() {
  return (
    
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Loginform></Loginform>}></Route>
      <Route exact path='/Main' element={<Navbar></Navbar>}></Route>
      <Route exact path='/Mapbox' element={<Mapbox></Mapbox>}></Route>
    </Routes>
    </BrowserRouter>
  {/* <Redirect></Redirect>     */}
  {/* <Mapbox></Mapbox> */}
    
    {/* <Navbar></Navbar>
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
    <br></br> */}
    </>
  );
}

export default App;
