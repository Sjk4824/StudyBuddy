import React, {useEffect, useState} from 'react'; 
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
    const [links, setLinks] = useState([]); 


    //on rendering this componenet, we need to get all the todos associated with this user -> useffect. 
    useEffect(() => {
        const fetchQuickLinks = async () => {
            const quickLinks = await axios.get("http://localhost:4000/getallqlinks", {
                params : {
                    googleID : JSON.parse(localStorage.getItem("user")).userId, 
                    // googleID : 78910, 
                }
            }).then((response) => {
                //here we need to set links as the response. 
                setLinks(response.data); 
                // console.log(response.data);

            }).catch((err) => {
                console.log(err); 
            })
        }
        fetchQuickLinks(); 
    }, []); 


    const handleClick = () =>{
        props.removeSidebar(true); 
        props.setLink(false); 
    }
    
    const handleSubmit = (event) => {
        event.preventDefault(); 
        if (!event) return;
        axios.get("http://localhost:4000/app/favicon", 
            {
                params: {
                    url : url
                }
            }
        ).then(async (resp) => {
            await axios.post("http://localhost:4000/addqlink", {
                googleID : JSON.parse(localStorage.getItem("user")).userId, 
                quickLink : {
                    resourceName : rName, 
                    url : url,
                    imgUrl : resp.data.icons[0].url, 
                }
            }).then((response) => {
                const newLink = {
                    resourceName : response.data.resourceName, 
                    url : response.data.url, 
                    imgUrl : response.data.imgUrl
                }
                makeNewLink(newLink); 
                setUrl(""); 
                setRName(""); 
                setImg(""); 
            })
        })
    }

    const makeNewLink = (toadd) => {
        const newItem = [...links, toadd]
        setLinks(newItem); 
    }

    const removeLink = async (index) => {
        const updated = [...links];
        updated.splice(index, 1);
        //we will send this updated array to the backend and findOne and update the array
        await axios.put("http://localhost:4000/deleteqlink", {
            googleID : JSON.parse(localStorage.getItem("user")).userId,
            updatedArray : updated, 
        }).then((response) => {
            setLinks(response.data); 
        }); 
        // setLinks(updated);
    }

    return (
        <div className = "quicklink">
            <div className = "quicklink__container">
                <AiOutlineClose onClick={handleClick} size={15} color="#354477" style={{marginLeft : "250px", position : "relative", cursor:"pointer"}}/>
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
                        <QuickCard key={index} index={index} rName = {link.resourceName} url={link.url} imgUrl = {link.imgUrl} removeLink={removeLink}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QuickLinks
