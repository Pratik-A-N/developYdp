import logo from "../Assets/images/Logo/logo2.png"
import React from 'react'

function handleBackCard(event) {
    document.body.style.overflowY = "scroll"
    document.getElementById("custCard").style.display = "none"
    document.getElementById("zo").style.display = "block"
    document.getElementById("zo2").style.display = "none"
}


export default function Cardback() {
  return (
    <div className="row z" id='zo2'>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
              <a className="navbar-brand" href="https://abhyudayiitb.org" target="/"> <img src={logo} alt="" className='aplo' /> </a>
              <button className="navbar-toggler" style={{background: "white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
                  <li className="nav-item tabs">
                    <button className="nav-link navCustomDesign" style={{background:"transparent",border:"none"}} onClick={(e)=>handleBackCard(e)} >Home</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

    </div>
  )
}
