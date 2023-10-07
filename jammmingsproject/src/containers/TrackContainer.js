 import React   from 'react';
 import TrackComponent from '../components/TrackComponent';
 function TrackContainer(props){ 
    return(
        <TrackComponent  songTitle={props.name} songDuration={props.duration} songArtist={props.artist} />
    );
 };
 export default TrackContainer;