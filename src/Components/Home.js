import React from 'react'
import Google from './Google'
import Navbar from './Navbar'
import star from '../Assets/images/star/star1.png'
import homepg from '../Assets/images/illustrations/homepg.png'
import About from './About'
import carnival from '../Assets/images/illustrations/carnival.png'
// import Info from './Info'


export default function Home() {
  return (
    <>
    {/* <div className="container">
        <Navbar/>
    </div>
    <div className="fluid-container">
        <Google/>
    </div> */}
    <div className="fluid-container" id="bg">
        <Navbar/>
        <div id="stars"><img src={star} alt="" id="star" /></div>
        <img src={homepg} alt=""  id="homepg" />
        <div className="cont-title">
          <div className="ydp " id='title'>YDP</div>
          <div>
          <Google/>
            
          </div>
        </div>
        {/* <Info/> */}
        <div className="row display-flex justify-content-center allAbout">
          <About/>
        </div>
        <img src={carnival} alt="" id='carnival'  />
    </div>
    
    </>
  )
}
