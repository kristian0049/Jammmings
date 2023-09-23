import React from 'react';

function SaveToSpotifyButtonComponent(props){

    return(
        <form>
            <label for="playlistName">Playlist Name: </label>
            <input type="text" id="playlistName" placeholder="Set Playlist name here" value={props.nameOfList} onChange={(e)=>{props.setNameOfList(e.target.value)}} minlength="1" maxlength="10"/>
            <button>Save Playlist</button>
        </form>
        
    )
};

export default SaveToSpotifyButtonComponent;