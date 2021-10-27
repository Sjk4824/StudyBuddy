import React, {useState} from 'react'; 
import "./QuickLinks.css"; 
import {AiOutlineClose} from "react-icons/ai";
import {FiLink} from "react-icons/fi";

function QuickLinks(props) {

    const [color3, setcolor3] = useState(true)

    const handleClick = () =>{
        props.removeSidebar(true); 
        props.setLink(false); 
    }

    return (
        <div className = "quicklink">
            <div className = "quicklink__container">
                <AiOutlineClose onClick={handleClick} size={15} color="#354477" style={{marginLeft : "250px", position : "relative"}}/>
                <div className = "quicklink__heading">
                    <button onMouseEnter = {() => {setcolor3(false)}} onMouseLeave ={() => {setcolor3(true)}} className = "sidebar__button"><FiLink size={33} color= {color3 ? "#354477" : "#fff"}/></button>
                    <p>Quick Links</p>
                </div>
                <div>
                    <form className = "quicklink__form">
                        <input placeholder="Resource Name"></input>
                        <input placeholder="Url"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default QuickLinks
