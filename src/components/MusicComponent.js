import React, {useState} from 'react'; 
import "./MusicComponent.css"; 
import {AiOutlineClose} from "react-icons/ai"; 
import {HiOutlineMusicNote} from "react-icons/hi"; 
function MusicComponent(props) {

    const [color1, setcolor1] = useState(true)

    const handleClick = () =>{
        props.removeSidebar(true); 
        props.setMusic(false); 
    }
    
    return (
        <div className = "music__component">
            <div className = "music__component__container">

                <AiOutlineClose onClick={handleClick} size={15} color="#354477" style={{marginLeft : "250px", position : "relative"}}/>
                <div className = "music__component__heading">
                <button onMouseEnter = {() => {setcolor1(false)}} onMouseLeave ={() => {setcolor1(true)}} className = "sidebar__button"><HiOutlineMusicNote size={33} color= {color1 ? "#354477" : "#fff"}/></button>
                    <p>Music</p>
                </div>
                <div>
                    <form className = "musicSearch__form">
                        <input placeholder="Search genre"></input>
                        <input placeholder="Search song"></input>
                    </form>
                </div>
                <div className = "music__component__info">
                    <div className = "album__picture">

                    </div>
                    <p className="music__info__p1">Name of the song</p>
                    <p className="music__info__p2">Artish Name</p>
                </div>
            </div>
        </div>
    )
}

export default MusicComponent
