import React, {useState} from 'react'
import "./Sidebar.css"; 
import {HiOutlineMusicNote} from "react-icons/hi"; 
import {BsCheck2Square} from "react-icons/bs"; 
import {FiLink} from "react-icons/fi"; 
import {AiOutlineCalculator} from "react-icons/ai";  

function Sidebar(props) {

    const [color1, setcolor1] = useState(true)
    const [color2, setcolor2] = useState(true)
    const [color3, setcolor3] = useState(true)
    const [color4, setcolor4] = useState(true)

    const handleClickMusic=()=>{
        //on clicking we need to remove sidebar and slide in respective component
        props.removeSidebar(false); 
    }
    const handleClickToDo=()=>{
        //on clicking we need to remove sidebar and slide in respective component
        props.removeSidebar(false); 
    }
    const handleClickLinks=()=>{
        //on clicking we need to remove sidebar and slide in respective component
        props.removeSidebar(false); 
    }
    const handleClickCalculator=()=>{
        //on clicking we need to remove sidebar and slide in respective component
        props.removeSidebar(false); 
    }

    return (
        <div className = "sidebar">
            <div className = "sidebar__container">
                <button onClick={handleClickMusic} onMouseEnter = {() => {setcolor1(false)}} onMouseLeave ={() => {setcolor1(true)}} className = "sidebar__button"><HiOutlineMusicNote size={30} color= {color1 ? "#354477" : "#fff"}/></button>
                <button onClick={handleClickToDo} onMouseEnter = {() => {setcolor2(false)}} onMouseLeave ={() => {setcolor2(true)}} className = "sidebar__button"><BsCheck2Square size={30} color= {color2 ? "#354477" : "#fff"}/></button>
                <button onClick={handleClickLinks} onMouseEnter = {() => {setcolor3(false)}} onMouseLeave ={() => {setcolor3(true)}} className = "sidebar__button"><FiLink size={30} color= {color3 ? "#354477" : "#fff"}/></button>
                <button onClick={handleClickCalculator} onMouseEnter = {() => {setcolor4(false)}} onMouseLeave ={() => {setcolor4(true)}} className = "sidebar__button"><AiOutlineCalculator size={35} color= {color4 ? "#354477" : "#fff"}/></button>
            </div>
        </div>
    )
}

export default Sidebar
