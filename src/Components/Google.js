import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import Formreg from './Formreg'

import axios from "axios";
import Card from './Card';
// import { Link } from 'react-router-dom';

// import {  useNavigate } from "react-router-dom";


// import { API_URL } from "./constants";
const API_URL = "https://cr.abhyudayiitb.org/ydpapi/Google"
const google = window.google

function Google () {
  // const navigate = useNavigate();
  const [user, setUser] = useState({})
  const [senduser, setSenduser] = useState({});

  const [reguser, setReguser] = useState({
    name: "",
    email: "",
    contact:"",
    school:"",
    age: "",
  })

  function handleCallbackResponse(response){
    // console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    // console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    // document.getElementsById("zo").style.zIndex = "2"
    const guser ={
      name : userObject.name,
      email : userObject.email,
    }

    setSenduser(guser)
    
    axios.post(API_URL, guser)
    .then(res => {  
      // console.log(res.data["age"]);
      if(res.data["status"] === 200){
        // document.getElementById("regpg").style.display = "none";
        setReguser({
          name: res.data["name"],
          email: res.data["email"],
          school: res.data["school"],
          age : res.data["age"],
        })
        document.body.style.overflowY = "scroll"
      }else{
          document.body.style.overflow = "hidden";
          document.getElementById("regpg").style.display = "block";
          document.getElementById("zo").style.display = "none"

        }
      })
      .catch(err => console.log(err));
  }


  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;

  }


  useEffect(() => {
    // global google
    google.accounts.id.initialize({
      client_id : "35930829354-tkpfrg6frsdnt4b8eh79iu8jtdbaupq1.apps.googleusercontent.com",
      callback : handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme:'outline' }
    );

    google.accounts.id.prompt();
  }, []);

  function handleCard(event) {
    document.body.style.overflowY = "hidden"
    document.getElementById("custCard").style.display = "block"
    document.getElementById("zo").style.display = "none"
    document.getElementById("zo2").style.display = "block"

  }    

  return (
    <div className="App">
      
      <div id="signInDiv" datatype='icon'> Sign up</div>

      {user &&
        <div>
          {/* <h3>{user.name}</h3> */}
        </div>
      }
      {Object.keys(user).length !== 0 && 
        <div>
          <button onClick={(e) => handleSignOut(e)} className="signInDiv1">
          <img src = {user.picture} alt ="" id='profileimg'></img>
            Sign Out
          </button> 
          <div className='innerdisc'>
            Click <button className='newbt' onClick={(e) => handleCard(e)}>Here</button> to Download your delegate Card 
          </div>
          <div id="custCard">
            <Card loggedInUser={reguser}/>
          </div>
          <Formreg onChange={(value)=> 
          setReguser(value)
        } 
                    loggedInUser={senduser}
          />
        </div>  
      }
    </div>
  );
}

export default Google;
