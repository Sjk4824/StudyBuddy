import React from 'react'
import "./Header.css"; 
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className = "header">
            <Link style={{textDecoration : "none"}} to ="/dashboard">
                <h2 className = "header__logo">StudyBuddy</h2>
            </Link>
            <button className = "header__btn">Start Pomodoro Session</button>
        </div>
    )
}

export default Header
