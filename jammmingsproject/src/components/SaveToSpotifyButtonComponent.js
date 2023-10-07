import React from 'react';
import submitPlaylist from '../functions/submitPlaylist';
function SaveToSpotifyButtonComponent(props){
     return(
         <form onSubmit={e=>{
            e.preventDefault();
            submitPlaylist(props.playList,props.nameOfList,props.accessToken,props.userId)}}>
             <label htmlFor="playlistname">playlist name: </label>
             <input type="text" id="playlistname" placeholder="set playlist name here" value={props.nameOfList} onChange={(e)=>{props.setNameOfList(e.target.value)}} minLength="1" maxLength="10"/>
             <button type="submit">save playlist</button>
         </form>
      
     )
};
export default SaveToSpotifyButtonComponent;