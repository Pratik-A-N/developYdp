import React ,{ useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import carnival from '../Assets/images/illustrations/carnival.png'
import axios from "axios";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import {  useNavigate } from "react-router-dom";
import leaf9 from '../Assets/images/Leaf/leaf9.png'
import leaf10 from '../Assets/images/Leaf/leaf10.png'



// import { API_URL } from "../constants";
// const API_URL = "https://cr.abhyudayiitb.org/api/mentor";
const API_URL = "https://cr.abhyudayiitb.org/ydpapi/Normal";



  const Formreg = props =>{
    console.log(props);
  // const navigate = useNavigate();

  const [user, setUser] = useState({
    pk: 0,
    name:props.loggedInUser["name"],
    email:props.loggedInUser["email"],
    contact:"",
    school:"",
    age:"",
  })

  const onChange = (e) => {
    props.onChange({ ...user, [e.target.name]: e.target.value })
    setUser({...user, [e.target.name]: e.target.value });
  };

  

  const handleSubmit = (e) =>{
    let x = document.getElementById("loading");
      x.style.display = 'block';
      let y = document.getElementById("afterload");
      y.style.display = 'none';
    e.preventDefault();
    // console.log(user);
    axios.post(API_URL, user)
    .then((response) =>{
      console.log(response);
      if(response.status === 201){
        console.log("success");
        let x = document.getElementById("loading");
        x.style.display = 'none';
        let y = document.getElementById("afterload");
        y.style.display = 'block';
        setTimeout(() => {
          document.getElementById("regpg").style.display = "none";
          document.body.style.overflowY = "scroll"
          document.getElementById("zo").style.display = "block"
        },3000);
        alert("Registered successfully! Click Ok to continue")
      }
    })
    .catch((error)=>{
      console.log(error);
      let x = document.getElementById("loading");
      x.style.display = 'none';
      let y = document.getElementById("afterload");
      y.style.display = 'block';
      alert(error);
    })
  };

  return (
    <div id="regpg">
    <div className="fluid-container" id="regdisplay">
        {/* <Navbar/> */}
        <img src={leaf10} alt="" id="leaf20" />
        <div className="row display-flex justify-content-center innerreg">PERSONAL DETAILS</div>
        <div className="row display-flex justify-content-center innerdisc mb-3">Please fill in all the details to complete your registration.</div>

        <div className="row display-flex justify-content-center">
          <div className="col-lg-5 px-5">
            <Form onSubmit={(e) => {handleSubmit(e)}}>
              <FormGroup>
                <Label for="" className="innertitle">Name:</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={(e) =>{onChange(e)}}
                  value={user.name}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="" className="innertitle">Email:</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={(e) =>{onChange(e)}}
                  value={user.email}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="" className="innertitle">Contact (Whatsapp preferably) :</Label>
                <Input
                  type="phone"
                  name="contact"
                  pattern="[0-9]{10}"
                  onChange={(e) =>{onChange(e)}}
                  value={user.contact}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="name" className="innertitle">Institute (College/School/NGO):</Label>
                <Input
                  type="text"
                  name="school"
                  onChange={(e) =>{onChange(e)}}
                  value={user.school}
                  required
                />
              </FormGroup>
              <img src={leaf9} alt="" id="leaf1" />
              <FormGroup>
                <Label for="name" className="innertitle">Age:</Label>
                <Input
                  type="number"
                  name="age"
                  min="0"
                  onChange={(e) =>{onChange(e)}}
                  value={user.age}
                  required
                />
              </FormGroup>
              <div className="extbt">
              <button className="bt1">
                <span className="spinner-border spinner-border-sm " id="loading" role="status" aria-hidden="true"></span>
                <span id="afterload">Register</span>
              </button>
              </div>
            </Form>
            {/* <Footer/> */}
          </div>
        </div>
      </div>
      <img src={carnival} alt="" id='carnival'  />

    </div>

  )
}

export default Formreg
