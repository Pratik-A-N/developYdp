import React from 'react'
// import Navbar from './Navbar'
import Leaf7 from '../Assets/images/Leaf/leaf7.png'
// import Leaf8 from '../Assets/images/Leaf/leaf8.png'
import Back from './Back'
// import carnival from '../Assets/images/illustrations/carnival.png'

export default function Contact() {
  return (
    <div className="fluid-container" id="bg">
        <Back/>
        <img src={Leaf7} alt="" srcset="" id='leaf7' />
        <div className="row display-flex justify-content-center innerreg up">Contact Us</div>
        <div className="row display-flex justify-content-center innerdisc mb-3">Feel free to reach out to us via call or text</div>
        <div className="row display-flex justify-content-center px-5 py-5">
          <div className="col-lg-5 mb-5">
            <div className="innertitle font-3">Ashutosh Khandare</div>
            <div className="innertitle font-3">Media and PR Manager</div>
            <div className="innertitle font-3">+91 9579441875</div>
            <a href="mailto:ashutosh@abhyudayiitb.org"><div className="innertitle font-3" style={{textDecoration:"underline"}}>ashutosh@abhyudayiitb.org</div></a>
          </div>
          <div className="col-lg-5">
            <div className="innertitle font-3">Tharani Ponnada</div>
              <div className="innertitle font-3">Media and PR Manager</div>
              <div className="innertitle font-3">+91 9346119502</div>
              <a href="mailto:tharani@abhyudayiitb.org"><div className="innertitle font-3" style={{textDecoration:"underline"}}>tharani@abhyudayiitb.org</div></a>
          </div>
        </div>
        
        <div className="row display-flex justify-content-center px-5 py-5">
          <div className="col-lg-5 ">
            <div className="innerdisc font-3">Student Activity Center, IIT Bombay</div>
            <div className="innerdisc font-3">Powai, Mumbai, PIN - 400076</div>
            <div className="innerdisc font-3">+91 9890398576</div>
            <a href="mailto:ashutosh@abhyudayiitb.org"><div className="innerdisc font-3" style={{textDecoration:"underline"}}>services.abhyudayiitb@gmail.com</div></a>
          </div>
          {/* <img src={Leaf8} alt="" className='leaf8' id='leaf2' /> */}
          <div className="col-lg-5 customEnd">
            <div className="innerdisc font-3"></div>
              <div className="innerdisc font-3"></div>
              <div className="innerdisc font-3 float-center">Follow us at</div>
              <div class="row display-flex ax">
                <div style={{width: "4vh"}}>
                    <a href="https://www.facebook.com/abhyuday.iitb/" target="/" class="fa fa-facebook" style={{fontSize: "2.5vh" , color:"#FFE1D1"}}> </a>
                </div>
                <div style={{width: "4vh"}}>
                    <a href="https://www.instagram.com/iitbombay_abhyuday/" target="/" class="fa fa-instagram" style={{fontSize: "2.5vh" , color:"#FFE1D1"}}> </a>
                </div>
                <div style={{width: "4vh"}}>
                    <a href="https://www.linkedin.com/company/abhyuday-iit-bombay/mycompany/" target="/" class="fa fa-linkedin" style={{fontSize: "2.5vh" , color:"#FFE1D1"}}> </a>
                </div>
                <div style={{width: "4vh"}}>
                    <a href="https://twitter.com/Abhyuday_IITB?s=07" target="/" class="fa fa-twitter" style={{fontSize: "2.5vh" , color:"#FFE1D1"}}> </a>
                </div>
                <div style={{width: "4vh"}}>
                    <a href="https://www.youtube.com/c/AbhyudayIITBombay" target="/" class="fa fa-youtube" style={{fontSize: "2.5vh" , color:"#FFE1D1"}}> </a>
                </div>
            </div>
          </div>
        </div>
        
        {/* <img src={carnival} alt="" id='carnival'  /> */}
    </div>
  )
}
