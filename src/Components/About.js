import React from 'react'
import Leaf1 from '../Assets/images/Leaf/leaf1.png'
import Leaf2 from '../Assets/images/Leaf/leaf2.png'
import Leaf3 from '../Assets/images/Leaf/leaf3.png'
import Leaf4 from '../Assets/images/Leaf/leaf4.png'
import Leaf5 from '../Assets/images/Leaf/leaf5.png'
import Leaf6 from '../Assets/images/Leaf/leaf6.png'

export default function About() {
  return (  
    <div className='col-lg-10 col-md-10 col-sm-10'>
        <div className="titlehead" id='about'>
            ABOUT US
        </div>
        <img src={Leaf1} alt="" id='leaf1'/>
        <div className="discrip">
            <p>Abhyuday, IIT Bombay is a student-run organisation working towards creating a sense of Social Responsibility and Leadership among the youth of India. We take initiatives to inspire the youth by instilling a sense of responsibility towards society and developing a culture of participation in impact-oriented activities.</p>

            <p>To bring Students, NGOs and CSR on the same platform in order to promote the exchange of ideas, values and culture among them, we are pleased to announce ‘The Delegate Program’ for <b>Social Fest 2023 - A Locus of Resilience.</b></p>
        </div>
        <div className="titlehead">
            WHY DO WE HAVE YOUTH DELEGATE PROGRAM?
        </div>
        <img src={Leaf2} alt="" id='leaf2' />
        <div className="discrip">
            There is a need for today's youth to lead their generation and do good for society. The Youth Delegate Program intends to bring out the leaders inside the students, young NGOs and corporates across India. Through the Youth Delegate Program (YDP) socially inclined students throughout the country represent the people of their college/society, where they put forth their ideas and issues.
        </div>
        <div className="titlehead">
            Who is a Delegate?
        </div>
        <div className="discrip">
            A delegate is a representative from an NGO/College/Social Startup/Corporate or any other organization.
        </div>
        <div className="titlehead">
            WHY YOUTH DELEGATE PROGRAM?
        </div>
        <div className="discrip row display-flex justify-content-center">
            <div className="col-lg-12">
                <ol type='1'>
                    <li> An opportunity to interact with Youth Delegates from different NGOs, CSRs and Colleges.</li>
                    <li> You will get the chance to visit an Annual Social Festival which will give you basic and core knowledge of how events, workshops, exhibitions, competitions etc are conducted at a large scale.</li>
                    <li> An opportunity to hear the leading speakers and changemakers of the country and know about the various social and technical issues in the society during lecture series and panel discussions.</li>
                    <li> It will improve your communication, convincing and management skills to organize social events and launch campaigns in your college.</li>
                </ol>
            </div>
            You will receive an organizational e-certificate from Abhyuday IIT Bombay on successful completion of your two-day Youth Delegation Programme.
        </div>
        <img src={Leaf3} alt="" id='leaf2' />
        <div className="titlehead" id='respons'>
            RESPONSIBILITIES
        </div>
        <div className="discrip">
            <div className="innertitle">ABHYUDAY ANNUAL SOCIAL FEST</div>
            <div className="innerdisc">Visit Abhyuday’s Annual two-day Social Festival</div> 

            <div className="innertitle">PARTICIPATION</div> 
            <div className="innerdisc">Participate in all the events organized by Abhyuday during the fest </div> 

            <img src={Leaf4} alt="" id='leaf1'/>

            <div className="innertitle">SOCIAL AWARENESS</div>
            <div className="innerdisc">Help us to spread awareness by publicising our events before and during the fest in your college (e.g. in your college groups etc)</div> 
        </div>
        <div className="titlehead" id='incen'>
            INCENTIVES
        </div>
        <div className="discrip">
            <div className="innertitle">COLLEGE DELEGATES</div> 
            <div className="innerdisc">
                <ul>
                    <li>Internship Opportunities</li>
                    <li>e-Certificate</li>
                    <li>Delegate Kit</li>
                    <li>Free passes for various events and concerts</li>
                    <li>Reserved seats for all the delegates in events</li>
                    <li>Opportunity to grow your network in different NGOs and CSRs</li>
                </ul>
            </div>


            <div className="innertitle">NGOs</div>
            <div className="innerdisc">
                <ul>
                    <li>Opportunity to connect with corporates from different CSRs and different eminent personalities</li>
                    <li>You will get the chance to connect with interested volunteers all over the country especially from IIT Bombay</li>
                    <li>Recognition and publicity of their works and projects among College Students and CSRs</li>

                    <img src={Leaf5} alt="" id='leaf2' />

                    <li>Free passes for various events and concerts</li>
                    <li>Reserved seats for all the delegates in each and every event & concerts</li>
                    <li>Opportunity to connect with Abhyuday for further collaborations</li>
                </ul>
            </div>

            <div className="innertitle">CORPORATES</div>
            <div className="innerdisc">
                <ul>
                    <li>Recognition and publicity of CSR work and projects among College Students and NGOs</li>
                    <li>Opportunity to connect with and know about the works of other CSR groups</li>
                    <li>You will get the chance to connect with interested volunteers all over the country especially from IIT Bombay as interns for CSR projects</li>
                </ul>
            </div>
            

            <div className="innertitle">SCHOOL STUDENTS</div>
            <div className="innerdisc">
                <ul>
                    <li>You will get the chance to interact with IIT Bombay students and many other students coming from different colleges and universities of India</li>
                    <li>Opportunity to hear from the leading speakers of the country</li>
                    <li>Chance to attend different events, competitions, workshops, lecture series, competitions, concerts etc during the two-day socialfest </li>
                </ul>
            </div>
            
            <img src={Leaf6} alt="" id='leaf1' />
        </div>
        <div className="titlehead">
            FAQs
        </div>
        <div className="discrip">
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button innertitle innerbt" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body innerdisc">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed innertitle innerbt" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body innerdisc">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed innerbt innertitle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body innerdisc">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
