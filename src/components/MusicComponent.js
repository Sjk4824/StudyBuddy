import React, {useState} from 'react'; 
import "./MusicComponent.css"; 
import {AiOutlineClose} from "react-icons/ai"; 
import {HiOutlineMusicNote} from "react-icons/hi"; 
import Dropdown from "./Dropdown"; 
import axios from "axios"; 
import querystring from "querystring"; 
import cookieParser from "cookie-parser"; 


function MusicComponent(props) {

    const [color1, setcolor1] = useState(true)

    let item = ["Music 1", "Music 2", "Music 3", "Music 4", "Music 5"]; 

    const handleClick = () =>{
        props.removeSidebar(true); 
        props.setMusic(false); 
    }
    
    const data = [1, 2, 3, 4]; 

    var client_id = '5fa27e4a3af942029fb0ba0e62443013'; // Your client id
    var client_secret = 'd22749d9094a4b46b858682f342476d5'; // Your secret
    var redirect_uri = 'http://localhost:3000/dashboard'; // Your redirect uri
    const AUTHORIZE = "https://accounts.spotify.com/authorize"; 
    const TOKEN  = "https://accounts.spotify.com/api/token"; 

    const loginSpotify = () => {
        var scope = 'user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private';
        
        let url = AUTHORIZE; 
        url += "?client_id="+client_id; 
        url += "&response_type=code"; 
        url += "&redirect_uri="+ encodeURI(redirect_uri); 
        url += "&show_dialog=true"; 
        url += "&"+scope; 
        window.location.href = url;
    }

    function handlePageLoad(){
        console.log("refreshing!");
        if(window.location.search.length > 0){
            handleRedirect(); 
        }
    }

    function handleRedirect(){
        let code = getCode();
        fetchAccessToken(code); 
        window.history.pushState("", "", redirect_uri);
    }

    function fetchAccessToken(code){
        let body = "grant_type=authorization_code"; 
        body += "&code=" + code; 
        body += "&redirect_uri="+encodeURI(redirect_uri); 
        body += "&client_id="+client_id; 
        body+= "&client_secret"+client_secret; 
        callAuthorizationApi(body); 
    }

    function callAuthorizationApi(body){
        let xhr = new XMLHttpRequest(); 
        xhr.open("POST", TOKEN, true); 
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader('Authorization', 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')))
        xhr.send(body); 
        xhr.onload = handleAuthorizationResponse; 
    }

    function handleAuthorizationResponse(){
        if(this.status === 200){
            var data = JSON.parse(this.responseText); 
            console.log(data); 
            if(data.access_token != undefined){
                var access_token = data.access_token;
                localStorage.setItem("access_token", access_token); 
            }
            if(data.refresh_token != undefined){
                var refresh_token = data.refresh_token; 
                localStorage.setItem("refresh_token", refresh_token); 
            }
            handlePageLoad(); 
        }
        else{
            console.log(this.responseText); 
            alert(this.responseText); 
        }
    }

    function getCode(){
        let code = null; 
        const queryString = window.location.search; 
        if(queryString.length > 0){
            const urlParams = new URLSearchParams(queryString); 
            code = urlParams.get("code")
        }

        return code; 
    }
    
    return (
        <div className = "music__component">
            <div onLoad={handlePageLoad()} className = "music__component__container">

                <AiOutlineClose onClick={handleClick} size={15} color="#354477" style={{marginLeft : "250px", position : "relative", cursor:"pointer"}}/>
                <div className = "music__component__heading">
                <button onMouseEnter = {() => {setcolor1(false)}} onMouseLeave ={() => {setcolor1(true)}} className = "sidebar__button"><HiOutlineMusicNote size={33} color= {color1 ? "#354477" : "#fff"}/></button>
                    <p>Music</p>
                </div>

                <button style={{zIndex : 10}} onClick = {loginSpotify}>Log in with Spotify</button>


                <form style={{zIndex : 10}} onSubmit={() => {}}>
                    <Dropdown options = {data}/>
                    <Dropdown options = {data}/>
                    <button type="submit">Search</button>
                </form>






                {/* <div>
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
                </div> */}
            </div>
        </div>
    )
}

export default MusicComponent
