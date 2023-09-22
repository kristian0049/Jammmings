import { getElementError } from '@testing-library/react';
import React from 'react';

function TrackComponent(props){

    const checkIfWeAreInPlaylist = ()=>{
       if(props.listLocation==="playList"){
        return <button onClick={props.removeFromPlayList}><>&minus;</></button>
        
       }else if(props.listLocation ==="trackList"){
        return <button onClick={props.addToPlayList}><>&#43;</></button>;
       }
    };
    return(
        <li key={props.songTitle} >
            <h3>{props.songTitle}</h3>
            <span>{props.songDuration}</span>
            <h4>{props.songArtist}</h4>
            {checkIfWeAreInPlaylist()}
        </li>
    );

};

export default TrackComponent;