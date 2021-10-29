import React, {useState} from 'react'; 
import "./QuickLinks.css"; 
import {AiOutlineClose} from "react-icons/ai";
import {FiLink} from "react-icons/fi";
import axios from "axios"; 
import QuickCard from './QuickCard';

function QuickLinks(props) {

    const [url, setUrl] = useState(""); 
    const [rName, setRName] = useState(""); 

    const [img, setImg] = useState(""); 

    const [color3, setcolor3] = useState(true)

    const [links, setLinks] = useState([
    ]); 

    const handleClick = () =>{
        props.removeSidebar(true); 
        props.setLink(false); 
    }

    // async function handleSubmit(event){
    //     event.preventDefault(); 
    //     if (!event) return;

    //     const response = await axios.get("http://localhost:4000/app/favicon", 
    //         {
    //             params: {
    //                 //the parameter for querying. 
    //                 url : url
    //             }
    //         }
    //     ); 

    //     const newLink = {
    //         linkName : rName, 
    //         url : url
    //     }
    //     makeNewLink(newLink); 
    //     setUrl(""); 
    //     setRName(""); 
    // }
    const handleSubmit = (event) => {
        event.preventDefault(); 
        if (!event) return;

        axios.get("http://localhost:4000/app/favicon", 
            {
                params: {
                    //the parameter for querying. 
                    url : url
                }
            }
        ).then((resp) => {
            const newLink = {
                linkName : rName, 
                url : url, 
                imgUrl : resp.data.icons[0].url
            }
            makeNewLink(newLink); 
            setUrl(""); 
            setRName(""); 
            setImg(""); 
        })
    }

    const makeNewLink = (toadd) => {
        const newItem = [...links, toadd]
        setLinks(newItem); 
    }

    const removeLink = (index) => {
        const updated = [...links];
        updated.splice(index, 1);
        setLinks(updated);
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
                    <form className = "quicklink__form" onSubmit={handleSubmit}>
                        <input value={rName} placeholder="Resource Name" onChange = {(event) => setRName(event.target.value)}></input>
                        <input value={url} placeholder="Url" onChange = {(event) => setUrl(event.target.value)}></input>
                        <button className="quick_link_add" type = "submit">+</button>
                    </form>
                </div>
                <div className = "quicklink__all">
                    {links.map((link, index) => (
                        <QuickCard key={index} index={index} rName = {link.linkName} url={link.url} imgUrl = {link.imgUrl} removeLink={removeLink}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QuickLinks
