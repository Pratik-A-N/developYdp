import React from 'react'
import downloadjs from 'downloadjs'
import html2canvas from "html2canvas"
// import jsPDF from "jspdf"
// import Navbar from './Navbar'
import bookmark from '../Assets/images/illustrations/bookmark.png'
import icon from '../Assets/images/illustrations/icon.png'
// import { reguser } from './Google'
import Cardback from './Cardback'

export default function Card({loggedInUser}) {

    const handleCaptureClick = () =>{
        const element = document.getElementById("delegateId")
        html2canvas(element,{logging:true, letterRendering: 1, useCORS:true})
        .then(canvas =>{
            // const imgWidth = 208;
            // const imgHeight = canvas.height * imgWidth / canvas.width;
            const imgData = canvas.toDataURL('img/png');
            // pdf.addImage(imgData,'PNG',0,0,imgWidth,imgHeight);
            // pdf.save("card.pdf");
            downloadjs(imgData,'download.png','img/png')

        })
    }
  return (
    <>
    <div className="fluid-container" id="bg">
        <Cardback/>
        <div className='row' style={{marginTop:"15vh"}}>
            <div className="col-lg-6 center">     
                 <button type="button" className='signInDiv1' onClick={handleCaptureClick}>Download</button>   
            </div>
            <div className="col-lg-6 center">
                <div id="delegateId">
                    <div className="IdCard">
                        <img src={bookmark} alt="" id="bookmark" />
                        <div className="header">
                            <div className="card-body">
                                <div className="idydp">YDP</div>
                            </div>
                        </div>
                        <div className="icon">
                            <img src={icon} alt="" />
                        </div>
                        <div className="name">
                            {loggedInUser.name}
                        </div>
                        <div className="row other">
                            <div className="email">Email: {loggedInUser.email}</div>
                            <div className="email">Institute: {loggedInUser.school}</div>
                            <div className="email">Age: {loggedInUser.age}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </> 
  )
}
