import React from 'react'
import "./Header.css"; 
import { GoogleLogout } from 'react-google-login'; 
import { Link } from 'react-router-dom';
import {useHistory} from "react-router-dom"; 

function Header(props) {

    let history = useHistory();

    const handleClick = () => {
        localStorage.clear(); 
        history.push("/login"); 
    }

    return (
        <div className = "header">
            <Link to = "/dashboard" style={{textDecoration : "none"}}>
                <h2 className = "header__logo">StudyBuddy</h2>
            </Link>

            <button onClick = {handleClick} className = "header__btn">Sign Out</button>
        </div>
    )
}

export default Header
