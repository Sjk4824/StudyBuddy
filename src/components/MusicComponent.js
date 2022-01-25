import React, {useState, useEffect} from 'react'; 
import "./MusicComponent.css"; 
import TrackSearchResult from "./TrackSearchResult"; 
import {AiOutlineClose} from "react-icons/ai"; 
import {HiOutlineMusicNote} from "react-icons/hi"; 
import useAuth from "./useAuth";   
import SpotifyWebApi from "spotify-web-api-node"; 

const spotifyWebApi = new SpotifyWebApi ({
    clientId: "5fa27e4a3af942029fb0ba0e62443013"
}); 

function MusicComponent(props) {

    // const code = new URLSearchParams(window.location.search).get("code"); 
    // const accessToken = useAuth(props.code); 
    
    const accessToken = props.at; 
    
    const [search, setSearch] = useState(""); 
    const [searchResults, setSearchResults] = useState([]); 

    const [color1, setcolor1] = useState(true)

    const handleClick = () =>{
        props.removeSidebar(true); 
        props.setMusic(false); 
    }


    var client_id =process.env.REACT_APP_CLIENT_ID; // Your client id
    var redirect_uri = 'http://localhost:3000/dashboard'; // Your redirect uri
    const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`; 

    useEffect(() => {
        if(!accessToken){
            return; 
        }
        spotifyWebApi.setAccessToken(accessToken); 
    }, [accessToken]); 

    useEffect(() => {
        if(!search){
            return setSearchResults([]); 
        }
        if(!accessToken){
            return; 
        }
        let cancel = false; 
        spotifyWebApi.searchTracks(search).then((res) => {
            if(cancel){
                return; 
            }
            setSearchResults(res.body.tracks.items.map(track => {

                const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
                    if(image.height < smallest.height){
                        return image
                    }
                    else{
                        return smallest
                    }
                }, track.album.images[0]);

                return {
                    artist : track.artists[0].name, 
                    title: track.name, 
                    uri: track.uri, 
                    albumUrl: smallestAlbumImage.url
                }
            }))
        })
        return () => (cancel = true)
    }, [search, accessToken])

    return (
        <div className = "music__component">
            <div className = "music__component__container">

                <AiOutlineClose onClick={handleClick} size={15} color="#354477" style={{marginLeft : "250px", position : "relative", cursor:"pointer"}}/>
                <div className = "music__component__heading">
                <button onMouseEnter = {() => {setcolor1(false)}} onMouseLeave ={() => {setcolor1(true)}} className = "sidebar__button"><HiOutlineMusicNote size={33} color= {color1 ? "#354477" : "#fff"}/></button>
                    <p>Music</p>
                </div>
                {props.code ?
                    <div>
                        <div>
                            <form className = "musicSearch__form">
                                <input type="search" placeholder="Search song" value = {search} onChange = {e => setSearch(e.target.value)}></input>
                            </form>
                            <div className="music__component__results">
                                {searchResults.map((song) => {
                                    return (
                                        <TrackSearchResult key={song.uri} artist={song.artist} song={song.title} img={song.albumUrl} uri={song.uri} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                
                :<button style={{zIndex: "10"}} ><a href={AUTH_URL}>Login with spotify</a></button>}
                
            </div>
        </div>
    )
}

export default MusicComponent
