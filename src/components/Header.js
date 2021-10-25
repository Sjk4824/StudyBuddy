import React from 'react'
import "./Header.css"; 

function Header() {
    return (
        <div className = "header">
            <h2 className = "header__logo">StudyBuddy</h2>
            <button className = "header__button">Start Pomodoro session</button>
        </div>
    )
}

export default Header
