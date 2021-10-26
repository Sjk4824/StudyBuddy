import React, {useState} from 'react'; 
import "./Todo.css"; 
import {AiOutlineClose} from "react-icons/ai";
import {BsCheck2Square} from "react-icons/bs";

function Todo(props) {

    const [color2, setcolor2] = useState(true)
    const handleClick = () =>{
        props.removeSidebar(true); 
        props.setToDo(false); 
    }

    return (
        <div className = "todo">
            <div className = "todo__container">
            <AiOutlineClose onClick={handleClick} size={15} color="#354477" style={{marginLeft : "250px", position : "relative"}}/>
            <div className = "todo__heading">
                <button onMouseEnter = {() => {setcolor2(false)}} onMouseLeave ={() => {setcolor2(true)}} className = "sidebar__button"><BsCheck2Square size={33} color= {color2 ? "#354477" : "#fff"}/></button>
                <p>To-Do List</p>
            </div>
            <div>
                <form className = "todo__form">
                    <input placeholder="Task"></input>
                    <input placeholder="Deadline(dd/mm/yy)"></input>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Todo
