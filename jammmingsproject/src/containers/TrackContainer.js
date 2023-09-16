 import React ,{useState}  from 'react';

 import TrackComponent from '../components/TrackComponent';

 function TrackContainer({name,duration,artist}){
    const [isInPlaylist,setIsInPlaylist]=useState(false);
    
    
    

    return(
        <TrackComponent isInPlaylist={isInPlaylist} songTitle={name} songDuration={duration} songArtist={artist}/>
    )
 };

 export default TrackContainer;