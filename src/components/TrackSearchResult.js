import React from 'react'
import "./TrackSearchResult.css"

function TrackSearchResult(imgURL) { 

    return (
        <div className = "trackSearchResult">
            <img src = {imgURL} style = {{height : "64px", width : "64px"}} />
        </div>
    )
}

export default TrackSearchResult
