import React from 'react'
import "./Login.css"; 
import studyImage from "./studyingsvg(1).svg"; 
import {FcGoogle} from "react-icons/fc"; 

function Login() {
    return (
        <div className = "login">
            <h2 className = "login__logo">StudyBuddy</h2>
            <p className = "login__tagline">Study Less, Study Smart</p>
            <button className="login__button"><FcGoogle size={23}/>   Sign in with google</button>

            <img className="login__img" src = {studyImage} alt=""></img>
        </div>
    )
}

export default Login
