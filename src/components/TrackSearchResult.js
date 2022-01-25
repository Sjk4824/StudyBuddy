import React from 'react'
import "./TrackSearchResult.css"

function TrackSearchResult(props) { 

    return (
        <div className = "trackSearchResult">
            <img style={{height : "60px", width : "60px"}} src={props.img} alt="album img"></img>
            <div className="track__description">
                <p className="track__description__song">{props.song}</p>
                <p className="track__description__artist">{props.artist}</p>
            </div>
        </div>
    )
}

export default TrackSearchResult
