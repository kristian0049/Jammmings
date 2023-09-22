import React from 'react';

import TrackContainer from '../containers/TrackContainer';

function PlaylistComponent(props){
    //On change add songs to the playlist
    const addTracks= ()=>{
        const arr =[];
        if(props.playList.length > 0){
            for(let i = 0; i < props.playList.length;i++){
                arr.push(props.playList[i]);
            }
        }
        return arr;
    }
    return(
        <div id="added-songs">
            <h1>Playlist</h1>
            <ul>
                {addTracks()}
            </ul>
        </div>
        
    );
};

export default PlaylistComponent;