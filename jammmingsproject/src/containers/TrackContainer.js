 import React ,{useState,useEffect}  from 'react';

 import TrackComponent from '../components/TrackComponent';

 function TrackContainer(props){
    const [songId,setSongId]= useState(0);
    return(
        <TrackComponent  songTitle={props.name} songDuration={props.duration} songArtist={props.artist} />
    );
 };

 export default TrackContainer;