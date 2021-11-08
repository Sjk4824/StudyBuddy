import React from 'react'
import "./Header.css"; 
import { Link } from 'react-router-dom';

function Header(props) {

    const handleClick = () => {
        props.openPopUp();
    }

    return (
        <div className = "header">
            <Link to = "/dashboard" style={{textDecoration : "none"}}>
                <h2 className = "header__logo">StudyBuddy</h2>
            </Link>
            <button onClick = {handleClick} className = "header__btn">Start Pomodoro Session</button>
        </div>
    )
}

export default Header
