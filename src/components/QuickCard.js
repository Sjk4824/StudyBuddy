import React from 'react'; 
import "./QuickCard.css"; 
import {BsFillTrashFill} from "react-icons/bs"; 

function QuickCard(props) {

    return (
        <div className = "quickCard">
            <div className = "quickCard__container">
                <div className = "quickCard__subcontainer">
                    <img className="quickCard__img" src ={props.imgUrl} alt="" />
                    <a style={{maxWidth : "180px"}} href = {props.url} target="_blank">{props.rName}</a>
                </div>
                <BsFillTrashFill onClick={() => props.removeLink(props.index)}/>
            </div>
        </div>
    )
}

export default QuickCard
