import React from 'react';

function TrackComponent(props){
    
       
    return(
        <li>
            <h3>{props.songTitle}</h3>
            <span>{props.songDuration}</span>
            <h4>{props.songAuthor}</h4>
            {props.isInPlaylist === true ? <button><>&minus;</></button> : <button><>&#43;</></button>}
        </li>
    );

};

export default TrackComponent;