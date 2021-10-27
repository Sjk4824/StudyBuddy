import React from 'react'; 
import "./TodoCard.css"; 
import {BsFillTrashFill} from "react-icons/bs"; 

function TodoCard(props) {
    return (
        <div className="todoCard">
            <div className = "todoCard__container">
                <div className = "todoCard__header">
                    <p>{props.deadline}</p>
                    <BsFillTrashFill onClick={() => props.removeTodo(props.index)}/>
                </div>
                <p className = "todoCard__task">{props.task}</p>
            </div>
        </div>
    )
}

export default TodoCard
