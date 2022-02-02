import React from 'react'; 
import "./TodoCard.css"; 
import {BsFillTrashFill} from "react-icons/bs"; 

function TodoCard(props) {

    let deadline = props.deadline; 

    function findDate(deadline){
        let modifiedDate = ""; 
        for(let i = 0; i<10; i++){
            modifiedDate = modifiedDate + deadline[i]; 
        }
        return modifiedDate; 
    }

    let modifiedDate = findDate(deadline); 

    return (
        <div className="todoCard">
            <div className = "todoCard__container">
                <div className = "todoCard__header">
                    <p>{modifiedDate}</p>
                    <BsFillTrashFill onClick={() => props.removeTodo(props.index)}/>
                </div>
                <p className = "todoCard__task">{props.task}</p>
            </div>
        </div>
    )
}

export default TodoCard
