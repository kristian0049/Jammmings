import React from 'react';

import TrackContainer from '../containers/TrackContainer';

function PlaylistComponent(props){
    //On change add songs to the playlist
    const addTracks= ()=>{
        let arr =[];
       
        if(props.playList.length > 0){
           console.log(props.playList[0]);
            arr = props.playList.map((song,index)=><li key={`Playlist_${song.name}`}>
               <TrackContainer  name={song.name} duration={song.duration} artist={song.artist}/>
               <button onClick={()=>{props.setPlayList(props.playList.filter((track,trackIndex)=>trackIndex!==index));}}><>&minus;</></button>
            </li>)
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
