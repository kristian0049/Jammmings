import React from 'react';

function TrackComponent(props){
   
           
    
       
    return(
        <li key={`${props.songTitle}_${props.songArtist}`} >
            <h3>{props.songTitle}</h3>
            <span>{props.songDuration}</span>
            <h4>{props.songArtist}</h4>
            {props.isInPlaylist === true ? <button><>&minus;</></button> : <button><>&#43;</></button>}
        </li>
    );

};

export default TrackComponent;