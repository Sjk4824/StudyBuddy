import React from 'react'
import "./Sidebar.css"; 
import {HiOutlineMusicNote} from "react-icons/hi"; 
import {BsCheck2Square} from "react-icons/bs"; 
import {FiLink} from "react-icons/fi"; 
import {AiOutlineCalculator} from "react-icons/ai"; 

function Sidebar() {
    return (
        <div className = "sidebar">
            <div className = "sidebar__container">
                <button className = "sidebar__button"><HiOutlineMusicNote size={30}/></button>
                <button className = "sidebar__button"><BsCheck2Square size={30}/></button>
                <button className = "sidebar__button"><FiLink size={30}/></button>
                <button className = "sidebar__button"><AiOutlineCalculator size={35}/></button>
            </div>
        </div>
    )
}

export default Sidebar
