
import React from 'react';

function TrackComponent(props){
    return(
        <div >
            <h3>{props.songTitle}</h3>
            <span>{props.songDuration}</span>
            <h4>{props.songArtist}</h4>
        </div>
    );
};

export default TrackComponent;