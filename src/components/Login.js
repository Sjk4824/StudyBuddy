import React, { useState, useEffect } from 'react'
import "./Login.css"; 
import studyImage from "./studyingsvg(1).svg"; 
import {FcGoogle} from "react-icons/fc"; 
import GoogleLogin from "react-google-login"; 
import {useHistory} from "react-router-dom"; 
const axios = require("axios"); 

function Login() {
    //on  button click, we need to authenticate user with google OAuth.

    //we need to clear the local storage everytime the login component is rendered : 
    useEffect(() => {
        localStorage.clear(); 
    }, []); 

    let history = useHistory();

    const handleSuccess = (response) =>{
        let userInfo = {
            "name" : response.profileObj.givenName, 
            "userId" : response.profileObj.googleId
        }
        axios.get("http://localhost:4000/loginuser", {
            params : {
                mailID : response.profileObj.email, 
                googleID : response.profileObj.googleId
            }
        })
        localStorage.setItem("user", JSON.stringify(userInfo)); 
        history.push("/dashboard");
    }

    const handleFailure = (err) => {
        console.log(err); 
    }

    return (
        <div className = "login">
            <h2 className = "login__logo">StudyBuddy</h2>
            <p className = "login__tagline">Study Less, Study Smart</p>
            <GoogleLogin
                clientId = "881799435990-umvhtu7g8k278l456alvoad8mo3v6qtj.apps.googleusercontent.com"
                render={renderProps => (
                    <button className="login__button" onClick={renderProps.onClick}><FcGoogle size={23}/>Sign in with Google</button>
                )}
                buttonText="Sign in with Google"
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
            />

            <img className="login__img" src = {studyImage} alt=""></img>
        </div>
    )
}

export default Login